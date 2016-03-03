import config from '../../config';

import autoprefixer from 'autoprefixer';

module.exports = {
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
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
}
