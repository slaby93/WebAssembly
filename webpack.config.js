const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const config = {
  context: path.join(__dirname, "/"),
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "index.js",
    publicPath: "/"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html"
    })
  ]
};

module.exports = config;
