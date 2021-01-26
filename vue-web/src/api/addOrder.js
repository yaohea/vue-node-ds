import request from '@/utils/request'

// 订单数据
export function getOrderData() {
  return request.get('/get_submit')
}

// 默认地址
export function defaultAddress() {
  return request.get('/default_address')
}

// 提交订单
export function onSubmit(obj) {
  return request.post('/add_order', obj)
}

// 清空提交订单
export function deleteOrder() {
  return request.delete('/delete_submit')
}

// 删除购物车选中的商品
export function deleteGoodsCart() {
  return request.delete('/delete_goods')
}
