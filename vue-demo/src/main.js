import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import '@/assets/scss/style.scss'
import '@/assets/font/iconfont.css'
import axios from './utils/request.js'
Vue.prototype.$axios = axios
Vue.use(Vant)
Vue.use(Lazyload)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('storage', function () {
  localStorage.clear()
  location.reload()
})
