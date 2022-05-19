const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, './../src/index.jsx'),
  output: {
    path: path.join(__dirname, './../dist'),
    filename: '[name].[chunkhash:8].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, './../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react-template',
      template: './public/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
}
