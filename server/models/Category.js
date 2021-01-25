const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: { type: String },
  children: [{
    categoryId: { type: String, unique: true  },
    img: { type: String },
    name: { type: String }
  }]
})

// schema.virtual('newsList', {
//   localField: '_id',
//   foreignField: 'categories',
//   justOne: false,
//   ref: 'Article'
// })

module.exports = mongoose.model('Category', schema)