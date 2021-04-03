const path = require(`path`);
const webpack = require(`webpack`);
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');

module.exports = {
  entry: `./src/index.js`,
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `../terminal`),
    publicPath: process.env.NODE_ENV === 'development'? '/': 'https://ibenderina.github.io/terminal'
  },
  devServer: {
    historyApiFallback: true,
    contentBase: path.join(__dirname, `public`),
    open: false,
    port: 1338,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract(
            {
              fallback: 'style-loader',
              use: ['css-loader', 'sass-loader']
            }
        )
      }
    ],
  },
  resolve: {
    modules: [`node_modules`, path.resolve(path.join(__dirname, `src/components`))],
    extensions: [`.js`, `.json`],
  },
  devtool: 'source-map',
  plugins: [
    new webpack.ProvidePlugin({
      React: `react`,
    }),
    new BaseHrefWebpackPlugin({
      baseHref: process.env.NODE_ENV === 'development'? '/':'https://ibenderina.github.io/terminal'
    }),
    new ExtractTextPlugin({filename: 'style.css'}),
    new HtmlWebpackPlugin({
      template: "./public/index.html"
    }),
    new CopyPlugin({
      patterns: [
        { from: "public/img", to: "img" },
      ],
    })
  ],
};
