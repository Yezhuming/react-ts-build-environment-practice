const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const common = require('./webpack.common');
const { SERVER_HOST, SERVER_PORT } = require('../constant');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: SERVER_HOST, // 指定 host，不设置的话默认是 localhost
    port: SERVER_PORT, // 指定端口，默认是8080
    stats: 'errors-only', // 终端仅打印 error
    clientLogLevel: 'silent', // 日志等级
    compress: true, // 是否启用 gzip 压缩
    open: true, // 打开默认浏览器
    hot: true, // 热更新
    // 跨域处理
    proxy: {
      // 接口代理1
      '/api/': {
        target: 'http://198.168.111.111:3001',
        changeOrigin: true,
      },
      // 接口代理2
      '/api-2/': {
        target: 'http://198.168.111.111:3002',
        changeOrigin: true,
        pathRewrite: {
          '^/api-2': '',
        },
      },
    },
  },
  devtool: 'eval-source-map',
  plugins: [new HotModuleReplacementPlugin()], // 热更新
});
