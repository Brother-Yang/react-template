const baseConfig = require('./base.config');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const { merge } = require('webpack-merge');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: 4000,
    open: true,
    // 刷新页面报错
    historyApiFallback: true,
  },
  // plugins: [new BundleAnalyzerPlugin()],
  plugins: [new ReactRefreshWebpackPlugin()],
});
