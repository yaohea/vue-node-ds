const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  img: { type: String },
  title: { type: String },
  price: { type: Number },
  num: { type: Number, default: 1 },
  goodsId: { type: String }
}, {
  timestamps: true
})
module.exports = mongoose.model('Order', schema)