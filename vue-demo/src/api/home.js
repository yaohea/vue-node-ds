import request from '@/utils/request'

// 获取首页轮播数据
export function getHomeSwipe () {
  return request({
    url: '/home_swipe',
    method: 'get'
  })
}
// 获取首页图标
export function getHomeicon () {
  return request({
    url: '/home_icon',
    method: 'get'
  })
}
// 获取首页商品列表
export function getHomeLists (page) {
  return request.get('/home_list', { params: { page: page } }
  )
}
