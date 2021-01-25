const mongoose = require('mongoose')
const path = require('path')


module.exports = app => {
  mongoose.set('useCreateIndex', true)
  mongoose.connect('mongodb://localhost/node', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('连接数据库成功'))
  .catch(err => console.log(err))

  // require('require-all')(path.join(__dirname,'../models'))
}