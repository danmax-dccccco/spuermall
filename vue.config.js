module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // '@':'src'  内部已经配置过了
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  }
}
