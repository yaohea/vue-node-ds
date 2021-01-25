import axios from 'axios'
import Vue from 'vue'
import router from '../router'

const toLogin = () => {
  router.push({
    path: '/login'
  })
}

const errorHandle = (status, other) => {
  switch (status) {
    case 400:
      // 去登陆
      toLogin()
      Vue.prototype.$toast.fail('信息校验失败')
      break
    case 401:
      // 去登陆
      toLogin()
      Vue.prototype.$toast.fail('请先登录')
      break
    case 403:
      toLogin()
      // token过时了
      // 清除token存储
      localStorage.removeItem('token')
      Vue.prototype.$toast.fail('token校验失败')
      break
    case 404:
      Vue.prototype.$toast.fail('请求的资源不存在')
      break
    default:
      console.log(other)
      break
  }
}
const http = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})
http.interceptors.request.use(function (config) {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + (localStorage.getItem('token') || '')
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

http.interceptors.response.use(res => {
  return res
}, err => {
  if (err.response.data.message) {
    Vue.prototype.$toast.fail(err.response.data.message)
  }

  const { response } = err
  if (response) {
    errorHandle(response.status, response.data.message)
    return Promise.reject(response)
  }

  return Promise.reject(err)
})

export default http
