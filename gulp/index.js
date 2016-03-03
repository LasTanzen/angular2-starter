'use strict';

import gulp from 'gulp';

// builds
import './tasks/dev.js';

// tests
import './tasks/test.js';
import './tasks/unit.js';
import './tasks/e2e.js';
import './tasks/lint.js';

gulp.on('stop', function () {
  if ( !global.isWatching ) {
    process.nextTick(function () {
      process.exit(0);
    });
  }
});
