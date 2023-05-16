const webpack = require('@cypress/webpack-preprocessor');
const webpackOptions = {
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
    ],
  },
};

module.exports = (on, config) => {
  on('file:preprocessor', cucumber());
};
