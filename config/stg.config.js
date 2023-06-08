const baseConfig = require('./base.config');
const { merge } = require('webpack-merge');

const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');

module.exports = merge(baseConfig, {
  mode: 'production',

  optimization: {
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // 构建时去除注释
          format: {
            comments: false,
          },
        },
        extractComments: false, // 是否将注释剥离到单独的文件中
      }),

      new CssMinimizerPlugin(),

      // Scope Hoisting
      new webpack.optimize.ModuleConcatenationPlugin(),
    ],
  },
});
