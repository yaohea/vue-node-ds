const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    img: { type: String }
})

module.exports = mongoose.model('Home', schema)