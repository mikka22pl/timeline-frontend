var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  context: path.join(__dirname, "src/js"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app.js",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: [
            'react-html-attrs',
            'transform-decorators-legacy',
            'transform-class-properties',
            'babel-plugin-transform-react-jsx-source'],
        }
      },
      {
        test: /\.json$/,
        exclude: /node_modules/,
        loader: 'json'
      },
      {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style-loader', 'css-loader', {publicPath: ''})
          //loader: "style-loader!css-loader"
      },
      {
          test: /\.(png|jpg|gif|woff|woff2)$/,
          loader: 'url-loader?limit=8192'
      },
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
      //{ test: require.resolve('jquery'), loader: 'expose?jQuery' },
      //{ test: require.resolve('jquery'), loader: 'expose?$' },
    ]
  },
  output: {
    path: __dirname,
    filename: "app.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    new ExtractTextPlugin("styles.css"),
    /*new webpack.ProvidePlugin({
       jQuery: 'jquery',
       $: 'jquery',
       jquery: 'jquery'
    })*/
  ],
};
