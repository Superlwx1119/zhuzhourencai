import router from './router'
import store from './store'

router.beforeEach(async(to, from, next) => {
  // 用户登录信息
  const loginAllInfo = store.getters.loginAllInfo
  if (loginAllInfo && loginAllInfo.userAcctId) {
    next()
  } else {
    // 注释这里麻烦记得打开好嘛！！！！！！！！！
    // const userInfo = await store.dispatch('user/getInfo')
    // store.commit('user/SET_LOGINALLINFO', userInfo)
    next()
  }
})
