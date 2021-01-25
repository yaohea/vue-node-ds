const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  username: { type: String, unique: true },
  password: {
    type: String, set (val) {
      return require('bcryptjs').hashSync(val, 10)
    }
  },
  level: { type: Number, default: 1 }
})
module.exports = mongoose.model('User', schema)