const path = require('path');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
      use: 'babel-loader',
        test: /\.js$/,
        exclude: [
          path.resolve(__dirname, "./node_modules"),
          path.resolve(__dirname, "./build")
        ]
      }
      ]
  }
};

module.exports = config;

