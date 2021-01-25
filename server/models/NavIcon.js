const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    img: { type: String }
})

module.exports = mongoose.model('NavIcon', schema)