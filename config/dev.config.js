const baseConfig = require('./base.config')
const { merge } = require('webpack-merge')

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 3008,
    open: true,
    // 刷新页面报错
    historyApiFallback: true,
  },
  // plugins: [new BundleAnalyzerPlugin()],
})
