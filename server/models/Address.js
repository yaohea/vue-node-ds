const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: String,
  tel: { type: String },
  address: { type: String },
  isDefault: { type: Boolean, default: false },
  areaCode: { type: String },
  state: {type: Boolean, default: false}
})
module.exports = mongoose.model('Address', schema)