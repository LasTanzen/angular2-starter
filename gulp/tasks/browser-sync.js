import gulp from 'gulp';
import browserSync from 'browser-sync';
import config from '../config.js';

let bs = browserSync.create();
GLOBAL.bsName = bs.name;

gulp.task('browser-sync', function() {
  bs.init({
    server: {
      baseDir: config.buildDir
    }
  });
});
