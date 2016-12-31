'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlPlugin = require('webpack-html-plugin');
var HasteResolverPlugin = require('haste-resolver-webpack-plugin');

var IP = '0.0.0.0';
var PORT = 4000;
var NODE_ENV = process.env.NODE_ENV;
// var ROOT_PATH = path.resolve(__dirname, '..');
var PROD = 'production';
var DEV = 'development';
let isProd = NODE_ENV === 'production';

var config = {
  paths: {
    src: './',
    index: './index.ios.js'
  }
};

console.log('ROOOOOOT SRC:', config.paths.src);
console.log('ROOOOOOT INDEX:', config.paths.index);


var webpackConfig = {
  ip: IP,
  port: PORT,
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    alias: {
      'react-native': 'ReactWeb'
    },
    extensions: ['', '.js', '.web.js', '.ios.js', '.android.js', '.native.js', '.jsx']
  },

    resolveLoader: {
        modulesDirectories: [ './node_modules' ],
        extensions: [ '', '.js' ]
    },
  entry: isProd ? [
    config.paths.index
  ] : [
    'webpack-dev-server/client?http://' + IP + ':' + PORT,
    'webpack/hot/only-dev-server',
    config.paths.index,
  ],
  output: {
    path: path.join(__dirname, 'output'),
    filename: 'bundle.js'
  },
  plugins: [
    new HasteResolverPlugin({
      platform: 'web',
      nodeModules: ['react-web']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(isProd ? PROD : DEV),
      }
    }),
    isProd ? new webpack.ProvidePlugin({
      React: 'react'
    }) : new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /.js?$/,
      loader: 'babel',
      query: {
        presets: ['react-native', 'stage-1']
      },
      include: [config.paths.src]
    }]
  }
};
// webpackConfig.resolve.alias[path.basename('.', '.')] = path.join(ROOT_PATH, '.');

module.exports = webpackConfig;
