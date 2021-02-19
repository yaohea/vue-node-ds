module.exports = app => {
  const express = require('express')
  const jwt = require('jsonwebtoken')
  const assert = require('http-assert')
  const router = express.Router()

  const auth = require('../middleware/auth')

  //home
  const Home = require('../models/Home')
  const HomeData = require('../models/HomeData')
  const NavIcon = require('../models/NavIcon')
  //Category
  const Category = require('../models/Category')
  // GoodsDetail
  const GoodsDetail = require('../models/GoodsDetail')
  //  ShopCart
  const ShopCart = require('../models/ShopCart')
  // Submit
  const Submit = require('../models/Submit')
  // Address
  const Address = require('../models/Address')
  // Order
  const Order = require('../models/Order')
  // User
  const User = require('../models/User')

  // get请求获取轮播图数据
  router.get('/home_swipe', async (req, res) => {
    const item = await Home.find()
    res.send(item)
  })
  // 获取导航列表数据
  router.get('/home_icon', async (req, res) => {
    const item = await NavIcon.find()
    res.send(item)
  })
  // 获取商品列表数据
  // router.get('/home_list', async (req, res) => {
  //   const item = await HomeData.find()
  //   console.log(req.query)
  //   res.send(item)
  // })
  // 获取搜索数据
  router.get('/search', async (req, res) => {
    const item = await HomeData.find()
    const item2 = item.filter(val => {
      if (val.title.indexOf(req.query.name) !== -1) {
        return true
      }
    })
    console.log(item2);
    res.send(item2)
  })
  // 获取商品列表数据
  router.get('/home_list', async (req, res) => {
    let page = (parseInt(req.query.page) - 1) * 4
    const item = await HomeData.find().skip(page).limit(4)
    res.send(item)
  })
  // 获取分类列表
  router.get('/categories', async (req, res) => {
    const item = await Category.find()
    res.send(item)
  })
  // 获取分类商品列表
  router.get('/goods_list/:id', async (req, res) => {
    const item = await HomeData.find({ categoryId: req.params.id })
    // console.log(req.params.id);
    res.send(item)
  })
  // 获取商品详情数据
  router.get('/goods_detail/:id', async (req, res) => {
    const item = await GoodsDetail.find({ goodsId: req.params.id })
    res.send(item)
  })

  // 获取购物车数据
  router.get('/get_cart', async (req, res) => {
    const item = await ShopCart.find()
    res.send(item)
  })
  // 根据id查询购物车数据
  router.get('/get_cart/:id', async (req, res) => {
    const item = await ShopCart.find({ goodsId: req.params.id })
    res.send(item)
  })

  // 添加购物车请求
  router.post('/add_cart', auth(), async (req, res) => {
    const item = await HomeData.find({ goodsId: req.body.goodsId }).select('-_id')
    item.forEach(val => {
      val.num = parseInt(req.body.num)
      val.price = parseInt(req.body.price)
    })
    const model = await ShopCart.create({ goodsId: item[0].goodsId, img: item[0].img, title: item[0].title, price: item[0].price, num: item[0].num })
    res.send(model)
  })

  // 修改购物车商品状态 / 修改购物车全部状态

  router.put('/edit/state', async (req, res) => {
    if (req.body.id !== '') {
      const item = await ShopCart.findOneAndUpdate({ goodsId: req.body.id }, { state: req.body.type })
      const item1 = await ShopCart.findOne({ goodsId: req.body.id })
      res.send(item1)
    } else {
      const item = await ShopCart.updateMany({}, { state: req.body.type })
      res.send(item)

    }
  })

  // 删除购物车选中的商品
  router.delete('/delete_goods', async (req, res) => {
    const item = await ShopCart.deleteMany({ state: true })
    res.send(item)
  })

  //获取地址列表
  router.get('/get_address', async (req, res) => {
    const item = await Address.find()
    res.send(item)
  })

  //根据ID获取地址数据
  router.get('/get_address/:id', async (req, res) => {
    const item = await Address.find({ _id: req.params.id })
    res.send(item)
  })

  // 保存地址
  router.post('/save_address', async (req, res) => {
    if (req.body.isDefault) {
      await Address.updateMany({}, { isDefault: false })
      await Address.updateOne({ _id: req.params.id }, { isDefault: true })
    }
    const model = await Address.create({ areaCode: req.body.areaCode, name: req.body.name, tel: req.body.tel, address: req.body.province + req.body.city + req.body.county + ' ' + req.body.addressDetail, isDefault: req.body.isDefault })
    res.send(model)
  })

  // 删除地址数据
  router.delete('/delete_address/:id', async (req, res) => {
    const model = await Address.findByIdAndDelete({ _id: req.params.id })
    res.send(model)
  })

  // 修改地址数据
  router.put('/save_address/:id', async (req, res) => {
    if (req.body.isDefault) {
      await Address.updateMany({}, { isDefault: false })
      await Address.updateOne({ _id: req.params.id }, { isDefault: true })
    }
    const model = await Address.findByIdAndUpdate({ _id: req.params.id }, { areaCode: req.body.areaCode, name: req.body.name, tel: req.body.tel, address: req.body.province + req.body.city + req.body.county + ' ' + req.body.addressDetail, isDefault: req.body.isDefault })
    res.send(model)
  })

  // 修改地址选中状态
  router.put('/updataState', async (req, res) => {
    await Address.updateMany({}, { state: false })
    const item = await Address.updateMany({ _id: req.body.id }, { state: true })
    res.send(item)
  })

  // 获取默认地址信息
  router.get('/default_address', async (req, res) => {
    // isDefault   这是是默认
    const item = await Address.find({ state: true })
    if (item[0]) {
      res.send(item)
    } else {
      const module = await Address.find({ isDefault: true })
      res.send(module)
    }
  })

  // 获取提交购物车的数据
  router.get('/get_submit', async (req, res) => {
    const item = await Submit.find()
    res.send(item)
  })

  // 购物车添加到提交订单
  router.post('/add_submit', async (req, res) => {
    for (let i = 0; i < req.body.length; i++) {
      await Submit.create({ goodsId: req.body[i].goodsId, img: req.body[i].img, title: req.body[i].title, price: req.body[i].price, num: req.body[i].num })
    }
    res.send(req.body)
  })
  // 清空提交订单
  router.delete('/delete_submit', async (req, res) => {
    const item = await Submit.deleteMany({})
    res.send(item)
  })
  // 查询订单数据
  router.get('/get_order', auth(), async (req, res) => {
    const item = await Order.find()
    res.send(item)
  })
  // 保存订单数据
  router.post('/add_order', async (req, res) => {
    for (let i = 0; i < req.body.length; i++) {
      await Order.create({ goodsId: req.body[i].goodsId, img: req.body[i].img, title: req.body[i].title, price: req.body[i].price, num: req.body[i].num })
    }
    res.send(req.body)
  })

  // 注册
  router.post('/register', async (req, res) => {
    let chaxun = await User.findOne({ username: req.body.username })
    assert(!chaxun, 422, '用户已经存在')
    const item = await User.create({ username: req.body.username, password: req.body.password })
    res.send(item)
  })
  // 登录
  router.post('/login', async (req, res) => {
    const { username, password } = req.body
    // 查用户
    let item = await User.findOne({ username })
    assert(item, 422, '用户不存在')
    // 判断密码
    const isValid = require('bcryptjs').compareSync(password, item.password)
    assert(isValid, 422, '密码错误')
    // 设置token
    const token = jwt.sign({ id: item._id }, app.get('secret'))
    item.token = token
    res.send({ username: item.username, token: item.token })
  })

  // 根据token查询用户
  router.get('/get_user', async (req, res) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    const { id } = jwt.verify(token, req.app.get('secret'))
    const user = await User.findById({ _id: id })
    res.send(user)
  })

  // 修改用户
  router.put('/edit_user/:id', async (req, res) => {
    const { username, password } = req.body
    let user = await User.findByIdAndUpdate({ _id: req.params.id }, { username, password })
    res.send(user)
  })

  // 错误处理必须放到最后
  app.use('/web/api', router)

  // 错误处理
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })
}