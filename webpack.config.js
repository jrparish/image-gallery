const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: [ './src/index.js' ]
  },

  output: {
    path: path.resolve('./dist'),
    sourceMapFilename: '[name].map',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  devtool: 'cheap-module-source-map',
  cache: true,

  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('node_modules')
    ],
    extensions: [ '.js', '.html' ]
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: [
          path.resolve('./src')
        ],
        loader: 'babel'
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        test: /\.less$/,
        loader: 'style!css!less'
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),

    new webpack.LoaderOptionsPlugin({
      debug: true
    }),

    new webpack.NoErrorsPlugin(),

    new webpack.EvalSourceMapDevToolPlugin()
  ]

};
