const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  chainWebpack: config => {
    // 发布模式
    config.when(process.env.NODE_ENV === 'production', config => {
      config.entry('app').clear().add('./src/main-prod.js')
      config.set('externals', {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        axios: 'axios',
        nprogress: 'NProgress'
      })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
    })
  },
  lintOnSave: process.env.NODE_ENV === 'development'
}
