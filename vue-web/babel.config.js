const prodPlugins = []
// 如果是发布模式
if (process.env.NODE_ENV === 'production') {
  prodPlugins.push('transform-remove-console')
}

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    // 发布模式时生效的插件
    ...prodPlugins,
    '@babel/plugin-syntax-dynamic-import'
  ]
}
