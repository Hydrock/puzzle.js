const webpack = require('webpack');
const path    = require('path');

// plugins
var HtmlWebpackPlugin = require('html-webpack-plugin');

// enviroment
const ENV = process.env.NODE_ENV;

const srcPath  = path.join(__dirname, './');
const distPath = path.join(__dirname, '../../app/client/js');

// client build config

const clientSrcPath = path.join(__dirname, './src/client');
const clientDistPath = path.join(__dirname, './app/client/js');

const clientBuildConfig = {
  target: 'web',
  watch: true,
  cache: true,
  devtool: '#cheap-module-eval-source-map',
  context: clientSrcPath,
  entry: {
    app: './app/index.jsx',
  },
  output: {
    path: clientDistPath,
    filename: '[name].bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.js?x$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: require.resolve('url-loader'),
        options: {
          limit: 10000,
          name: '../static/media/[name].[hash:8].[ext]',
        },
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      title: 'PuzzleJS',
      filename: '../index.html',
      template: './html/index.html'
    })
  ]
}

// server build config

const serverSrcPath = path.join(__dirname, './src/server');
const serverDistPath = path.join(__dirname, './app/server');

const serverBuildConfig = {
  target: 'node',
  watch: false,
  cache: true,
  devtool: '#cheap-module-eval-source-map',
  context: serverSrcPath,
  entry: {
    app: './server.js',
  },
  output: {
    path: serverDistPath,
    filename: 'server.js',
  },
  resolve: {
    modules: ["node_modules"],
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  node: {
    fs: 'empty'
  }
}

// -------------------------------------- //

let currentConfig;

switch (ENV) {
  case 'build-client':
    currentConfig = clientBuildConfig;
    break;
  case 'build-server':
    currentConfig = serverBuildConfig;
  default:
    break;
}

module.exports = currentConfig;