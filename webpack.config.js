// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // outras configurações...
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEBHOOK_TOKEN': JSON.stringify(process.env.WEBHOOK_TOKEN),
    }),
  ],
};
