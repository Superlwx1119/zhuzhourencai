import IdentifyPromiseWorker from 'promise-worker'
import IdentifyWorker from 'worker-loader!./identify.worker'
import SignPromiseWorker from 'promise-worker'
import SignWorker from 'worker-loader!./sign.worker'
import { msgSuccess, msgError } from './message'

const identifyWorker = new IdentifyWorker()
const promiseIdentifyWorker = new IdentifyPromiseWorker(identifyWorker)
const signWorker = new SignWorker()
const promiseSignWorker = new SignPromiseWorker(signWorker)

const connectIdentify = param => promiseIdentifyWorker.postMessage({
  msgType: param
})

const callIdentify = param => promiseIdentifyWorker.postMessage({
  msgType: 2,
  param: param
})

const closeIdentify = param => promiseIdentifyWorker.postMessage({
  msgType: param
})

const connectSign = param => promiseSignWorker.postMessage({
  msgType: 1
})

const callSign = param => promiseSignWorker.postMessage({
  msgType: 2,
  param: param
})

const closeSign = param => promiseSignWorker.postMessage({
  msgType: 3
})

identifyWorker.onmessage = function(result) {
  console.log('收到identifyWorker消息')
  console.log(result)
  const jsonData = result.data
  const code = jsonData.code
  const dataStr = jsonData.data
  try {
    const data = JSON.parse(dataStr)
    if (dataStr !== '' && dataStr !== undefined && dataStr !== null) {
      if (code === 1) {
        window.showIdentificationResultDialog(data)
        msgSuccess('请核对身份认证信息!')
      } else if (code === 0) {
        msgError(data)
      }
    }
  } catch {
    if (code === 0) {
      msgError(dataStr)
    }
  }
}

signWorker.onmessage = function(result) {
  console.log('收到signWorker消息')
  console.log(result)
  const jsonData = result.data
  const code = jsonData.code
  const data = jsonData.data
  if (code === 1) {
    window.showSignResultDialog(data)
    msgSuccess('请核对签名信息!')
  } else if (code === 0) {
    msgError(data)
  }
}

// 验证浏览器是否支持WebWorker和WebSocket
const functionalCheck = param => {
  if (typeof (Worker) === 'undefined') {
    msgError('错误: 您的浏览器不支持WebWorker，请使用更高版本的浏览器！')
    return
  }
  if (!('WebSocket' in window)) {
    msgError('错误: 您的浏览器不支持WebSocket，请使用更高版本的浏览器！')
    return
  }
  // console.log('浏览器终端功能兼容性检测通过!')
}

// 第一个参数就是原来的字符串，第二个是宽度，第三个就是回调方法
function cutImageBase64(base64, w, callback) {
  var newImage = new Image()
  var quality = 0.6// 压缩系数0-1之间
  newImage.src = base64
  // url为外域时需要
  newImage.setAttribute('crossOrigin', 'Anonymous')
  var imgWidth, imgHeight
  newImage.onload = function() {
    imgWidth = this.width
    imgHeight = this.height
    var canvas = document.createElement('canvas')
    var ctx = canvas.getContext('2d')
    if (Math.max(imgWidth, imgHeight) > w) {
      if (imgWidth > imgHeight) {
        canvas.width = w
        canvas.height = w * imgHeight / imgWidth
      } else {
        canvas.height = w
        canvas.width = w * imgWidth / imgHeight
      }
    } else {
      canvas.width = imgWidth
      canvas.height = imgHeight
      quality = 0.6
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(this, 0, 0, canvas.width, canvas.height)
    var base64 = canvas.toDataURL('image/jpeg', quality) // 压缩语句
    // 如想确保图片压缩到自己想要的尺寸,如要求在50-150kb之间，请加以下语句，quality初始值根据情况自定
    while (base64.length / 1024 > 150) {
      quality -= 0.01
      base64 = canvas.toDataURL('image/jpeg', quality)
    }
    // 防止最后一次压缩低于最低尺寸，只要quality递减合理，无需考虑
    while (base64.length / 1024 < 50) {
      quality += 0.001
      base64 = canvas.toDataURL('image/jpeg', quality)
    }
    callback(base64)// 必须通过回调函数返回，否则无法及时拿到该值
  }
}

// 将base64转换为blob
export function convertBase64UrlToBlob(urlData) {
  const arr = urlData.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new Blob([u8arr], { type: mime })
}
// base64转file文件（即二进制文件）
export function dataURLtoFile(dataurl, filename = 'file') {
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const suffix = mime.split('/')[1]
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], `${filename}.${suffix}`, {
    type: mime
  })
}

/**
 * 图片base64转换 图片压缩
 * @param  this
 * @param  file
 * @param  {boolean} 选参，默认压缩
 * @param {Array}  选参，默认支持的图片类型 jpeg ,png ,bmp
 * @param {Number}  选参，默认10M
 * @param {Number}  选参，压缩图片目标宽度,默认413px
 * @param {Number} 选参，压缩图片目标高度,默认626px
 * @param {Number} 选参，导出的图片质量,默认值是0.85
 */
export const compressPicture = function(obj, file, zip = true, fileType = ['jpg', 'jpeg', 'png', 'bmp'], s = 10, w = 600, h = 600, q = 1.00) {
  const that = obj
  return new Promise(function(resolve, reject) {
    // 限制图片大小
    const isLt10M = file.size / 1024 / 1024 < s
    // 限制图片格式
    let isFormat = 0
    for (var i = 0; i < fileType.length; i++) {
      if ('image/' + fileType[i] === file.type) {
        isFormat++
      }
    }
    const ft = fileType.join(',')
    if (!isFormat) {
      return that.$message.error(`上传头像图片仅限于 ${ft} 格式!`)
    }
    if (!isLt10M) {
      that.$message.error(`上传头像图片大小不能超过 ${s}MB!`)
      return false
    }
    // 选择的文件是图片
    if (file.type.indexOf('image') === 0) {
      // 压缩图片需要的一些元素和对象
      const reader = new FileReader()
      // 创建一个img对象
      const img = new Image()

      reader.readAsDataURL(file)
      // 文件base64化，以便获知图片原始尺寸
      reader.onload = function(e) {
        img.src = e.target.result
        if (!zip) {
          resolve(img.src)
        }
      }
      if (!zip) {
        return false
      }
      // base64地址图片加载完毕后执行
      img.onload = function() {
        // 缩放图片需要的canvas（也可以在DOM中直接定义canvas标签，这样就能把压缩完的图片不转base64也能直接显示出来）
        const canvas = document.createElement('canvas')
        const context = canvas.getContext('2d')
        // 图片原始尺寸
        const originWidth = this.width
        const originHeight = this.height
        // console.log('图片原始尺寸', originWidth, originHeight)
        // 最大尺寸限制，可通过设置宽高来实现图片压缩程度
        const maxWidth = w
        const maxHeight = h
        // 目标尺寸
        let targetWidth = originWidth
        let targetHeight = originHeight
        // 图片尺寸超过300x300的限制
        if (originWidth > maxWidth || originHeight > maxHeight) {
          if (originWidth / originHeight > maxWidth / maxHeight) {
            // 更宽，按照宽度限定尺寸
            targetWidth = maxWidth
            targetHeight = Math.round(maxWidth * (originHeight / originWidth))
          } else {
            targetHeight = maxHeight
            targetWidth = Math.round(maxHeight * (originWidth / originHeight))
          }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth
        canvas.height = targetHeight
        // 清除画布
        context.clearRect(0, 0, targetWidth, targetHeight)
        // 图片压缩
        context.drawImage(img, 0, 0, targetWidth, targetHeight)
        /* 第一个参数是创建的img对象；第二三个参数是左上角坐标，后面两个是画布区域宽高 */
        // 压缩后的图片转base64 url
        /* canvas.toDataURL(mimeType, qualityArgument),mimeType 默认值是'image/png';
         * qualityArgument表示导出的图片质量，只有导出为jpeg和webp格式的时候此参数才有效，默认值是0.92 */
        const newUrl = canvas.toDataURL('image/jpeg', q)// base64 格式
        resolve(newUrl)
      }
    }
  })
}
export default {
  functionalCheck,
  connectIdentify,
  callIdentify,
  closeIdentify,
  connectSign,
  callSign,
  closeSign,
  cutImageBase64,
  compressPicture,
  convertBase64UrlToBlob,
  dataURLtoFile
}
