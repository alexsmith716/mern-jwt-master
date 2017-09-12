
const path = require('path');

module.exports = {

  entry: './client/src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public')
  },

  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: '/node_modules',
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  
};
