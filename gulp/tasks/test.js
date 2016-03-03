import gulp from 'gulp';
import runSequence from 'run-sequence';
import config from '../config.js';

import './unit.js';
import './e2e.js';
import './lint.js';

gulp.task('test', (cb) => {
  runSequence('lint', 'unit', 'e2e', cb);
});
