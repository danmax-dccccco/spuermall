module.export = {
  configureWebpack: {
    resolve: {
      alias:{
        // '@':'src'  内部已经配置过了
        'assets':'@/assets',
        'common':'@/common',
        'components':'@/components',
        'netword':'@/network',
        'views':'@/views',
      }
    }
  }
}
