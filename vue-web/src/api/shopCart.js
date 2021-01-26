import request from '@/utils/request'

// 获取购物车数据
export function getCartData () {
  return request.get('/get_cart')
}

// 修改选择状态
export function editGoodsState(obj) {
  return request.put('/edit/state', obj)
}

// 删除选择的商品
export function delGoods() {
  return request.delete('delete_goods')
}

// 提交订单
export function submitOrder(state) {
  return request.post('/add_submit', state)
}
