const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

entries = {
  main: "./assets/app"
};
module.exports = {
  context: __dirname,
  entry: entries,
  output: {
    path: path.resolve("./assets/dist/"),
    publicPath: "/static/dist/",
    filename: "[name].js"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[name].css" : "[name].[hash].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        // includes all code shared between entry points.
        commons: {
          name: "commons",
          chunks: "initial",
          minChunks: 2
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          fix: true
          // eslint options (if necessary)
        }
      },
      { test: "/.js$/", exclude: "/node_modules/", loader: "babel-loader" },
      {
        test: /\.(png|woff|webp|woff2|svg|eot|ttf|gif|jpe?g)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 1000,
              // ManifestStaticFilesStorage reuse.
              name: "images/[name].[ext]"
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};
