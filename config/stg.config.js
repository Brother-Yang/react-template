const baseConfig = require('./base.config')
const { merge } = require('webpack-merge')

module.exports = merge(baseConfig, {
  mode: 'production',
})
