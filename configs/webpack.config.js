// Base configuration

const path = require('path');

const rootPath = path.resolve('.');

module.exports = {
  entry: {
    'bad-app': './src/BadApp/index',
    'good-app': './src/GoodApp/index',
    'awesome-app': './src/AwesomeApp/index',
  },
  output: {
    path: path.join(rootPath, 'build'),
    filename: '[name].js',
    publicPath: '/build',
  },
  module: {
    loaders: [
      { test: /\.jsx?$/, loader: 'babel', exclude: [/node_modules/] },
      { test: /\.css$/, loader: 'style!css', exclude: [/node_modules/] },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
};
