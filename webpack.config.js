const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {  
  entry: slsw.lib.entries,
  target: 'node',
  devtool: "source-map",
  module: {
    loaders: [
      { test: /\.ts(x?)$/, loader: 'ts-loader' }
    ]
  },
  externals: {
    'aws-sdk': 'aws-sdk'
  },
  resolve: {
    extensions: [
      '.js',
      '.json',
      '.ts',
      '.tsx'
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js'
  },
};