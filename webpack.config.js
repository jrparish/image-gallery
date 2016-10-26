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
      },

      // Font Awesome
      {
        test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/font-woff'
      }, {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=application/octet-stream'
      }, {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'file'
      }, {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url?limit=10000&mimetype=image/svg+xml'
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

    new webpack.EvalSourceMapDevToolPlugin(),

    new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]) // saves ~100k from build
  ]

};
