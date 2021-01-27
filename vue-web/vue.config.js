const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // // 发布模式(生产环境)生成的静态文件路径
  // publicPath: process.env.NODE_ENV === 'production'
  //   ? '/web/' // 加上web
  //   : '/',
  outputDir: path.join(__dirname, '/../server/web'),
  // assetsDir: 'web',
  // indexPath: 'index.html',
  // 引入的路径？
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
        axios: 'axios'
        // nprogress: 'NProgress'
      })
    })
    // 开发模式
    config.when(process.env.NODE_ENV === 'development', config => {
    })
  },
  lintOnSave: process.env.NODE_ENV === 'development'
}
