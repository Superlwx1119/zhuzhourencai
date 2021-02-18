// 计算，解决浮点数精度问题
export default {
  // 加法
  add(arg1, arg2) {
    var r1, r2, m, n
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    // last modify by deeka
    // 动态控制精度长度
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m + arg2 * m) / m).toFixed(n)
  },
  // 除法
  except(arg1, arg2) {
    var t1 = 0; var t2 = 0; var r1; var r2
    try {
      t1 = arg1.toString().split('.')[1].length
    } catch (e) {
      return NaN
    }
    try {
      t2 = arg2.toString().split('.')[1].length
    } catch (e) {
      return NaN
    }
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * Math.pow(10, t2 - t1)
  },
  // 乘
  ride(arg1, arg2) {
    var m = 0; var s1 = arg1.toString(); var s2 = arg2.toString()
    try { m += s1.split('.')[1].length } catch (e) {
      return NaN
    }
    try { m += s2.split('.')[1].length } catch (e) {
      return NaN
    }
    return Number(s1.replace('.', '')) * Number(s2.replace('.', '')) / Math.pow(10, m)
  },
  // 减
  reduce(arg1, arg2) {
    var r1, r2, m, n
    try { r1 = arg1.toString().split('.')[1].length } catch (e) { r1 = 0 }
    try { r2 = arg2.toString().split('.')[1].length } catch (e) { r2 = 0 }
    m = Math.pow(10, Math.max(r1, r2))
    // last modify by deeka
    // 动态控制精度长度
    n = (r1 >= r2) ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
  }
}
