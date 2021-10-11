const webpack = require('webpack');
const path = require('path');

module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: './src/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    port: 3030,
    hot: true,
    compress: true,
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, 'dist'),
    }
  }
}
