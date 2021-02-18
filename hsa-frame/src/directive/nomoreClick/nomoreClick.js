// 点击两秒禁用
export default {
  bind(el, binding, vnode) {
    if (vnode.parent && vnode.parent.data.attrs.disabled) {
      return
    }
    el.addEventListener('click', e => {
      el.classList.add('is-disabled')
      el.disabled = true
      setTimeout(() => {
        el.disabled = false
        el.classList.remove('is-disabled')
      }, 2000)
    })
  }
}
