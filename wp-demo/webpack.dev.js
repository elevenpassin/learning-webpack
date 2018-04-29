const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('./dist'),
    hot: true,
  },
  plugins: [
    new webpack.NamedChunksPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})