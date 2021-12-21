const path = require('path');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const glob = require('glob');
const PurgeCSSPlugin = require('purgecss-webpack-plugin');
const common = require('./webpack.common');
const { PROJECT_PATH } = require('../constant');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    // 每次build都清空dist文件夹
    new CleanWebpackPlugin(),
    // 抽离css代码
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:8].css',
      chunkFilename: 'css/[name].[hash:8].css',
      ignoreOrder: false,
    }),
    // 包分析器
    // new BundleAnalyzerPlugin({
    //   analyzerMode: 'static',
    //   analyzerPort: 8091, // 运行后的端口号 可以修改
    //   generateStatsFile: true,
    //   statsOptions: { source: false },
    // }),
    // 去除无用样式
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.resolve(PROJECT_PATH, './src')}/**/*.{tsx,scss,less,css}`, { nodir: true }),
      whitelist: ['html', 'body'],
    }),
  ],
});
