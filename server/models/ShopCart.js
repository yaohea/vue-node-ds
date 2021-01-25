const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  state: { type: Boolean, default: false },
  img: { type: String },
  title: { type: String },
  price: { type: Number },
  goodsId: { type: String, unique: true },
  num: { type: Number, default: 1 }
})
module.exports = mongoose.model('ShopCart', schema)