
module.exports = app => {
  const express = require('express')
  const Mock = require('mockjs')

  const router = express.Router()

  router.get('/', async (req, res) => {
    const obj = Mock.mock({
      // 轮播
      img: "@image('1125X352','pink','#666','IMG')",

      // icon
      'icon|10': [
        {
          id: '@region',
          img: "@image('185X144','red', 'pink','icon')"
        }
      ],

      // ad
      'ad|4': [
        {
          id: '@increment(1-100)',
          img: "@image('180X180','yellow', 'red','ad')",
          title: '正品直收'
        }
      ],
      // goods
      'goods|4': [
        {
          id: '@increment(1-100)',
          name: '手机',
          img: "@image('372X372','yellow', 'red','ad')",
          title: ' 赤核 攀升高达正版联名报丧女妖典藏版电竞机箱(支持30系显卡/E-ATX主板/360水冷/5V ARGB机甲灯效/6风扇位) ',
          price: '￥2999'
        }
      ]
    })
    res.send(obj)
  })
  router.get('/category', async (req, res) => {
    var obj = Mock.mock({
      // categories
      'categories|3': [
        {
          id: '@increment(100)',
          name: '手机数码',
          'goods|4': [
            {
              id: '@increment(100)',
              img: "@image('140X140','yellow', 'red','ad')",
              name: '手机'
            }
          ]
        }
      ],
      'shop|3': [
        {
          name: '官方旗舰店',
          img: "@image('372X372','yellow', 'red','ad')",
          title: ' 赤核 攀升高达正版联名报丧女妖典藏版电竞机箱(支持30系显卡/E-ATX主板/360水冷/5V ARGB机甲灯效/6风扇位) ',
          price: '￥2999',
          checked: true,
          num: 1
        }
      ]
    })
    res.send(obj)
  })

  app.use('/admin/api', router)
}
