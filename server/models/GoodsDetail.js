const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  goodsId: { type: String, unique: true },
  swipe_img: [{ img: { type: String } }],
  price: { type: Number },
  title: { type: String },
  big_img: [{ img: { type: String } }],
  small_img: { type: String },
  num: { type: Number, default: 1 }
})

module.exports = mongoose.model('GoodsDetail', schema)