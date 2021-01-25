const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('cors')())

require('./router/index')(app)
app.listen(3001, () => {
  console.log('连接成功')
})
