module.exports = options => {
  // 登录授权中间件
  return async (req, res, next) => {

    const assert = require('http-assert')
    const jwt = require('jsonwebtoken')
    const User = require('../models/User')
    
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请提供token')
    // 注意req.app 
    const { id } = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '无效token')
    req.user = await User.findById(id)
    assert(req.user, 422, '请先登录')
    await next()
  }
}