const path = require('path')
//const webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/public/',
    filename: 'bundle.js',
  },
  watch: true,
  devtool: 'inline',
  module: {
    rules: [
      {
        test: /(\.tag)/,
        include: /src/,
        use: [
          {
            loader: 'riot-tag-loader',
            options: {
              type: 'es6',
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env',],
          },
        },
      },
    ],
  },
}
