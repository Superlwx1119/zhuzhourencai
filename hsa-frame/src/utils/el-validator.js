export default function validator(rule, value, callback) {
  if (!value && !rule.required) {
    callback()
  }
  if (regexping(rule.regexp, value)) {
    callback()
  } else {
    return callback(new Error(rule.message || errText))
  }
}
var errText = ''

function regexping(regexp, value) {
  if (regexp) {
    let reg
    if (regexp === 'cn') { // 中文
      reg = /^[\u0391-\uFFE5]+$/
      errText = '仅允许中文汉字'
    } else if (regexp === 'hasCn') { // 含有中文
      reg = /.*[\u4e00-\u9fa5].*/
      errText = '必须含有中文'
    } else if (regexp === 'noCn') { // 不含中文
      reg = /^[^\u4e00-\u9fa5]*$/
      errText = '不允许有中文'
    } else if (regexp === 'noSpecialCharacter') { // 不能有特殊字符
      reg = /^[\u4E00-\u9FA5A-Za-z0-9_]+$/
      errText = '不允许输特殊字符'
    } else if (regexp === 'en') { // 英文字母
      reg = /^[a-zA-Z]+$/
      errText = '仅允许英文字母'
    } else if (regexp === 'passOne') { // 英文或数字 最多20位
      reg = /^([a-zA-Z]|[0-9])+$/
      errText = '仅允许英文或数字'
    } else if (regexp === 'En+Number') { // 任意英文+数字
      reg = /^[a-zA-Z0-9]+$/
      errText = '仅允许英文及数字'
    } else if (regexp === 'decimal') { // 小数浮点数类型
      reg = /^\d+(\.\d+)?$/
      errText = '必须是小数'
    } else if (regexp === 'integer') { // 整数类型 - 正负都可以
      reg = /^-?[1-9]\d+$/
      errText = '必须是整数'
    } else if (regexp === '+integer') { // 整数类型 - 正数
      reg = /^[0-9]*[1-9][0-9]*$/
      errText = '必须是正整数'
    } else if (regexp === '0+integer') { // 0+正数
      reg = /^(0|\+?[1-9][0-9]*)$/
      errText = '必须是大于等于0的整数'
    } else if (regexp === 'number') { // 数字类型
      // reg = /^-?[0-9]\d+$/
      reg = /^[0-9]*$/
      errText = '必须是数字'
    } else if (regexp === 'email') { // 邮箱
      reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/
      errText = '邮箱格式错误'
    } else if (regexp === 'phone') { // 手机 18165221849
      reg = /^1\d{10}$/
      errText = '必须是手机号码'
    } else if (regexp === 'tel') { // 电话 0731-5632575 or 0731-5632575-111
      reg = /^\d{7,8}$|^0\d{2,3}-?\d{7,8}$|^0\d{2,3}-?\d{7,8}-?\d{1,6}$/
      errText = '必须是电话号码'
    } else if (regexp === 'phoneAndTel') { // 手机+电话
      reg = /^1\d{10}$|^\d{7,8}$|^0\d{2,3}-?\d{7,8}$|^0\d{2,3}-?\d{7,8}-?\d{1,6}$/
      errText = '必须是手机或电话号码'
    } else if (regexp === 'postcode') { // 邮政编码
      reg = /^\d{6}$/
      errText = '必须是6位数字'
    } else if (regexp === 'http') { // http (支持 - :post,www,ip,http,https)
      reg = /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/
      errText = '必须是正确url地址'
    } else if (regexp === 'ip') { // ip地址
      reg = /(\d+)\.(\d+)\.(\d+)\.(\d+)/
      errText = '必须是正确ip格式'
    } else if (regexp === 'identityCard') { // 身份证
      reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/
      errText = '必须是正确身份证'
    } else if (regexp === 'money') {
      reg = /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/
      value += ''
      errText = '请输入正确的金额'
    } else if (regexp === 'jsz') {
      reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}(\d|x|X)$/
      errText = '请输入正确的驾驶证号码'
    } else if (regexp === 'jgz') {
      reg = /^[0-9]{8}$/
      errText = '请输入正确的军官证（士兵证）号码'
    } else if (regexp === 'hz') {
      reg = /^[a-zA-Z0-9]{5,17}$/
      errText = '请输入正确的护照号码'
    } else if (regexp === 'backCard') {
      reg = /^([1-9]{1})(\d{15}|\d{16}|\d{17}|\d{18})$/
      errText = '请输入正确的银行卡号'
    }
    if (!reg.test(value)) { // item 验证不通过
      return false
    } else {
      return true
    }
  } else {
    return true
  }
}
