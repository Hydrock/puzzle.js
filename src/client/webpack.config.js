var webpack = require('webpack'),
    path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');

var srcPath  = path.join(__dirname, './'),
    distPath = path.join(__dirname, '../../app/client/js');

module.exports = {
  watch: false,
  cache: true,
  devtool: '#cheap-module-eval-source-map',
  context: srcPath,
  entry: {
      app: './js/index.js',
  },
  output: {
      path: distPath,
      filename: '[name].bundle.js',
  },
  resolve: {
      modules: ["node_modules"],
  },
  plugins: [
      new webpack.NoEmitOnErrorsPlugin(),
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: '../index.html',
        template: './html/index.html'
      })
  ]
};