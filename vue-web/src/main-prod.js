import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
// import './plugins/vant'
// import Vant, { Lazyload } from 'vant'
// import 'vant/lib/index.css'
import VueLazyLoad from 'vue-lazyload'
import '@/assets/scss/style.scss'
import '@/assets/font/iconfont.css'
import axios from './utils/request.js'
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueLazyLoad)
new Vue({
  router,
  // store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('storage', function () {
  localStorage.clear()
  location.reload()
})
