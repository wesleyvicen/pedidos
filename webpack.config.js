const webpack = require('webpack');

module.exports = {
  // Suas outras configurações do Webpack
  plugins: [
    new webpack.DefinePlugin({
      'process.env.WEBHOOK_TOKEN': JSON.stringify(process.env.WEBHOOK_TOKEN),
    }),
  ],
};
