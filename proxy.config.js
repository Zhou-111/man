module.exports = {
  //主要用于测试(dev)和(server)时的反向代理配置
  proxy: {
    '/api': {
      target: 'http://10.18.28.32:8083',
      pathRewrite: {
        '^/api': '/',
        changeOrigin: true
      }
    },
    '/authApi': {
      target: 'http://10.18.28.226:8090',
      pathRewrite: {
        '^/authApi': '/',
        changeOrigin: true
      }
    }
  },
  //正式环境配置
  prod: {
    // target: 'http://202.100.86.202:8092/'
    target: 'http://10.18.100.28:8089/'
  },
  ssr: {
    target: 'http://' + (process.env.HOST || '10.18.100.28') + ":" + (process.env.PORT || 8089)
  }
}
