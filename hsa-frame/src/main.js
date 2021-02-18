import Vue from 'vue'

import components from '@/utils/components.js'
Vue.use(components)

import Cookies from 'js-cookie'
import 'babel-polyfill'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition' // elementUi内置折叠组件
Vue.component(CollapseTransition.name, CollapseTransition)
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'
import locale from '@/assets/locale/cn.js'
import './icons' // icon
import './permission' // permission control
import './utils/error-log' // error log

import * as filters from './filters' // global filters

import { handleConfirm, msgSuccess, msgError, msgWarning } from './utils/message'

// import vueSticky from './directive/sticky'
// if (process.env.NODE_ENV === 'production') {
//   const { mockXHR } = require('../mock')
//   mockXHR()
// }
// Eric y 全局挂载属性
Vue.prototype.$bus = new Vue()

// 全局方法挂载
Vue.prototype.$msgSuccess = msgSuccess

Vue.prototype.$msgError = msgError

Vue.prototype.$msgConfirm = handleConfirm
Vue.prototype.$msgWarning = msgWarning
Vue.prototype.$msgInfo = function(msg) {
  this.$message.info(msg)
}
Vue.use(Element, {
  size: Cookies.get('size') || 'small', // set element-ui default size
  locale: locale
})

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
