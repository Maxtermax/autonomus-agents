const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const WebpackNotifierPlugin = require('webpack-notifier');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
  plugins: [
    new LiveReloadPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true }),
    new HardSourceWebpackPlugin()
  ]
});