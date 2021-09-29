const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "eval-source-map",
  mode: "development",
  entry: ["./src/index.js"],
  output: {
    path: path.resolve(__dirname, "diet"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(s*)css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ["file-loader"],
      },
    ],
  },
  devServer: { historyApiFallback: true },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "./index.html",
      publicPath: "./",
      template: "./index-template.ejs",
      inject: "body",
    }),
  ],
};
