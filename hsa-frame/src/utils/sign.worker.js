import registerPromiseWorker from 'promise-worker/register'
let ws = {}
let isConnected = false
const wsUrl = 'ws://127.0.0.1:8079/common'

registerPromiseWorker((params) => {
  const msgType = params.msgType
  if (msgType === 1) {
    connectDabai()
  } else if (msgType === 2) {
    callDabai(params.param)
  } else if (msgType === 3) {
    unconnect()
  }
})
// 连接大白
export function connectDabai() {
  if (ws.close) {
    ws.close()
  }
  // 建立连接
  ws = new WebSocket(wsUrl)
  // 连接成功
  ws.onopen = function() {
    // console.log('连接认签名终端成功!')
    isConnected = true
  }
  // 客户端收到服务端发来的消息
  ws.onmessage = function(msg) {
    const data = msg.data
    const json = JSON.parse(data.replace(/\\/g, '').replace(/"{/, '{').replace(/}"/, '}'))
    // console.log(json)
    let result = {}
    if (json.MsgType === 'busi') {
      result = {
        code: 1,
        data: json.MsgContent
      }
    } else {
      result = {
        code: 0,
        data: '获取签名信息失败'
      }
    }
    postMessage(result)
  }
  // onclose事件
  ws.onclose = function(evt) {
    // console.log('WebSocketClosed!')
  }
  // onerror事件
  ws.onerror = function(evt) {
    // console.log('WebSocketError!')
  }
}
export function callDabai(params) {
  if (!isConnected) {
    const result = {
      code: 0,
      data: '请确认创智中间件与终端机是否连接或刷新页面重试!'
    }
    postMessage(result)
    return
  }
  if (typeof params === 'undefined' || params === null) {
    // console.log('请求签名终端参数错误!')
    const result = {
      code: 0,
      data: '请求签名终端参数错误!'
    }
    postMessage(result)
    return
  }
  // 发送的数据需要序列化
  const cm = JSON.stringify(params)
  // console.log(cm)
  // console.log('发送指令: ' + cm)
  ws.send(cm)
}

export function unconnect() {
  ws.close()
}
