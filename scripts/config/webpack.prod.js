const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new CleanWebpackPlugin(),
    // 包分析器
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      analyzerPort: 8091, // 运行后的端口号 可以修改
      generateStatsFile: true,
      statsOptions: { source: false },
    }),
  ],
});
