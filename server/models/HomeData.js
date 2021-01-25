const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  categoryId: { type: String },
  img: { type: String },
  title: { type: String },
  price: { type: Number },
  goodsId: { type: String,unique: true },
  num: { type: Number, default: 1 }
})
module.exports = mongoose.model('HomeData', schema)