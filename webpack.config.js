const path = require('path');

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    path: path.resolve(__dirname, './app/temp/scripts'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['env']
        }
      }
    ]
  }
};
