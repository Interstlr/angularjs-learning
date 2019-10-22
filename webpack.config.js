var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  target: 'web', // default
  module: {
    rules: [
      {
        test: /\.(html)$/,
        use: 'html-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, './src/')
    }
  },
  devServer: {
    port: 5000,
    compress: true,
    contentBase: path.join(__dirname, '../client/dist/'),
    hot: true,
  },
};
