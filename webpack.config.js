const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    /*new HtmlWebpackPlugin({
      title: "Output Management",
    }),*/
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '.' },
        { from: 'node_modules/w2ui/w2ui.css', to: 'css' },
      ],
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
