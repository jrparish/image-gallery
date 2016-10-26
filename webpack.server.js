const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require('./webpack.config.js');

const HOST = 'localhost';
const PORT = 8000;
const CLIENT_URL = `http://${HOST}:${PORT}`;

const config = Object.create(webpackConfig);
config.entry.app.unshift(`webpack-dev-server/client?${CLIENT_URL}/`, 'webpack/hot/dev-server');
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.watch = true;

const compiler = webpack(config);

const server = new WebpackDevServer(compiler, {
  publicPath: `/`,
  contentBase: '/dist',
  stats: {
    colors: true,
    version: false,
    hash: false,
    timings: false,
    chunks: true,
    chunkModules: false,
    assets: false
  }
});

server.listen(PORT, HOST, err => {
  if (err) {
    console.log(err);
  }
});
