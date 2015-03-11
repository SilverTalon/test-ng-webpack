var webpack = require('webpack');
var path = require('path');
var bower_dir = path.join(__dirname, 'bower_components');
var node_modules_dir = path.join(__dirname, 'node_modules');

var config = {
 addVendor: function (name, path) {
   this.resolve.alias[name] = path;
   this.module.noParse.push(path);
 },
 context: __dirname,
 entry: {
   app: ['webpack/hot/dev-server', './app/app.js']
 },
 output: {
   publicPath: '/',
   path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? './dist/' : './build'),
   filename: 'bundle.js'
 },
 resolve: {
   extensions: ['', '.js', '.json'],
   alias: {}
 },
 module: {
   noParse: [],
   loaders: [
     { test: /\.js$/, loader: '6to5-loader', exclude: [bower_dir, node_modules_dir] },
     /*{ test: /\.html$/, loader: "ng-cache?prefix=[dir]/[dir]" },*/
     { test: /\.html$/, loader: "file-loader?name=components/[name]/[name].[ext]" },
     { test: /\.css$/, loader: 'style-loader!css-loader' },
     { test: /\.(woff|png)$/, loader: 'url-loader?limit=100000' }
   ]
 },
 plugins: [
   new webpack.optimize.CommonsChunkPlugin('app', null, false)
 ]
};

config.addVendor('ngNewRouter', path.resolve(node_modules_dir, 'angular-new-router/dist/router.es5.js'));

module.exports = config;
