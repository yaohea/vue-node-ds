const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(require('cors')())
// app.set('secret', 'i2u34adqw123')
// 开放静态文件
app.use('/', express.static(path.join(__dirname, '/web')));
app.use('/web/api', express.static(path.join(__dirname, '/uploads')));

// app.use(express.static(path.join(__dirname, '/uploads')));

app.set('secret', 'SDG#$%@$#Gsdg23')

require('./plugins/db')(app)

require('./router/index')(app)

// require('./router/web/index')(app)


app.listen(3000, () => {
  console.log('连接成功');
})