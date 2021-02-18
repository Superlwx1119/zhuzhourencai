import registerPromiseWorker from 'promise-worker/register'

let ws = {}
let isConnected = false
let heartbeatInterval = null
let packageHead = {}
let packageBody = ''
let isForeground = false
let result = {}
let code
let Jtype
const wsUrl = 'ws://127.0.0.1:8124'

registerPromiseWorker((params) => {
  // console.log('worker has got' + JSON.stringify(params))
  const msgType = params.msgType
  if (msgType === 1) {
    connectDabai()
  } else if (msgType === 2) {
    callDabai(params.param)
  } else if (msgType === 3) {
    unconnect()
  }
})

// 连接大白认证机，打开业务受理导航界面后，调用此接口自动连接大白
export function connectDabai() {
  if (ws.close) {
    ws.close()
  }
  // 建立连接
  ws = new WebSocket(wsUrl)
  // 连接成功
  ws.onopen = function() {
    isConnected = true
    // 发送心跳包
    heartbeat()
  }
  // 客户端收到服务端发来的消息
  ws.onmessage = function(evt) {
    let data = evt.data
    try {
      // JSON字符串类型, 转为对象
      data = JSON.parse(data)
    } catch {
      // 非JSON字符串类型, 无需操作
    }
    // 数据包头
    if (typeof data === 'object' && data.strLength) {
      packageHead = data
      Jtype = data.Jtype
    } else {
      // 数据包体
      // 总共一个包
      if (typeof data === 'object') {
        packageBody = data
        // console.log('接收到object数据(包体): ' + JSON.stringify(packageBody))
        code = 1
        if (Jtype === 12) {
          // console.log('错误: 中间件与认证机失去连接!')
          packageBody = '认证机中间件与认证机失去连接!'
          code = 0
        }
        if (Jtype === 13) {
          // console.log('中间件与认证机恢复连接!')
          packageBody = '认证机中间件与认证机恢复连接!'
          code = 1
        }
        result = {
          code: code,
          data: packageBody
        }
        postMessage(result)
      }
      // 多个包
      if (typeof data === 'string') {
        packageBody += data
        if (packageBody.length >= packageHead.strLength) {
          code = 1
          // console.log(packageBody)
          if (Jtype === 6 || Jtype === 8) {
            result = {
              code: code,
              data: packageBody
            }
            postMessage(result)
            packageBody = ''
          }
        }
      }
    }
  }
  // onclose事件
  ws.onclose = function(evt) {
    // console.log('WebSocketClosed!')
    isConnected = false
    if (heartbeatInterval) {
      clearInterval(heartbeatInterval)
    }
  }
  // onerror事件
  ws.onerror = function(evt) {
    // console.log('WebSocketError!')
    if (evt && evt.currentTarget.readyState === 3) {
      // console.log('连接认证服务失败! 请确认已开启中间件!')
      result = {
        code: 0,
        data: '连接认证服务失败! 请确认已开启认证机中间件并连接到认证机!'
      }
      postMessage(result)
    }
    unconnect()
  }
}

export function callDabai(param) {
  if (!isConnected) {
    // console.log('错误: 请确认中间件与认证机是否连接或刷新页面重试!')
    result = {
      code: 0,
      data: '请确认认证机中间件与认证机是否连接或刷新页面重试!'
    }
    postMessage(result)
    return
  }
  const Jtype = parseInt(param.type)
  const JtypeObj = {
    'Jtype': Jtype
  }
  const data = {}
  const evaluationLink = param.evaluationLink
  if (Jtype === 11) {
    if (!evaluationLink) {
      result = {
        code: 0,
        data: '请联系运维人员配置评价系统!'
      }
      // console.log('错误: 请输入评价系统链接!')
      postMessage(result)
      return false
    }
    if (evaluationLink.indexOf('http') === -1) {
      // console.log('错误: 评价系统链接需要包含http:// 或 https://')
      result = {
        code: 0,
        data: '评价系统配置错误，请联系运维人员!'
      }
      postMessage(result)
      return false
    }
    param = {
      evaluationLink: evaluationLink
    }
  }
  if (Jtype === 14) {
    param = {
      isForeground: !isForeground
    }
    isForeground = !isForeground
  }
  Object.assign(data, JtypeObj, param)
  // 发送的数据需要序列化
  const cm = JSON.stringify(data)
  // console.log(cm)
  // console.log('发送指令(' + Jtype + '): ' + cm)
  ws.send(cm)
}

export function heartbeat() {
  heartbeatInterval = setInterval(() => {
    ws.send(JSON.stringify({
      'Jtype': 10
    }))
    // console.log('发送心跳包')
  }, 3000)
}

export function unconnect() {
  ws.close()
}
