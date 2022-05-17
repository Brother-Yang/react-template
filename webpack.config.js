const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // mode: 'development',
  mode: 'production',
  entry: path.join(__dirname, './src/index.jsx'),
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'bundle[hash].js',
  },
  devServer: {
    port: 3008,
    open: true,
    // 刷新页面报错
    historyApiFallback: true,
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
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      '@': path.join(__dirname, './src'),
    },
  },
}
