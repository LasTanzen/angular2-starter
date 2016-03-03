import gConfig from '../../config';

import wpConfig from './webpack.config.test.js';

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine'],
    reporters: ['mocha'],
    logLevel: config.LOG_ERROR,
    basePath: '../../../app',
    files: [
      'main.js',
      '*.spec.js',
      '**/*.spec.js'
    ],
    preprocessors: {
      'main.js': ['webpack'],
      '*.spec.js': ['webpack'],
      '**/*.spec.js': ['webpack']
    },
    webpack: wpConfig,
    webpackMiddleware: {
        noInfo: true
    },
    singleRun: true,
    browsers: [
      'Chrome'
    ]
  });
};
