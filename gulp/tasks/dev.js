'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';

import './clean.js';
import './copy-index.js';
import './webpack.js';
import './browser-sync';
import './watch';

gulp.task('dev', ['clean'], function(cb) {
  GLOBAL.environment = 'development';
  runSequence(['webpack', 'copy-index', 'lint'], 'browser-sync', 'watch', cb);
});
