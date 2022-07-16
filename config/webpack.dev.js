const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const path = require('path');
const { HotModuleReplacementPlugin } = require('webpack');
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const WorkboxPlugin = require('workbox-webpack-plugin');

/** @type {import('webpack').Configuration} */

const devConfig = {
  mode: "development",
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
    hot: true,
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    new WorkboxPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
     }),
  ]
};

module.exports = merge(common, devConfig);