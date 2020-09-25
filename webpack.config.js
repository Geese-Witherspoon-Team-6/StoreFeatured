var path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  watch: true,
  watchOptions: {
    aggregateTimeout: 600,
    ignored: /node_modules/,
  },
  output: {
    path: path.resolve(__dirname, 'client/dist'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules | bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};