import config from '../../config';

import webpack from 'webpack';
import autoprefixer from 'autoprefixer';


module.exports = {
  entry: {
    main: `${config.srcDir}/main.js`,
    vendor: `${config.srcDir}/vendor.js`
  },
  output: {
    path: './build',
    filename: "[name].js",
    chunkFilename: "[chunkhash].js"
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /\.html$/,
        loader: 'raw!html-minify'
      },
      {
        test: /\.scss$/,
        loaders: ['to-string', 'css', 'postcss-loader', 'sass']
      }
    ]
  },
  resolve: {
    extensions: ['','.js','.json']
  },
  'html-minify-loader': {
    dom: {
      lowerCaseAttributeNames: false // Angular2 uses camelCase attributes
    }
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js', Infinity)
  ],
  devtool: "eval"
};
