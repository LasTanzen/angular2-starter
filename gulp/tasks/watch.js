import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';
import config from '../config.js';

gulp.task('watch', function(cb) {
  let bs = browserSync.get(GLOBAL.bsName);

  gulp.watch(
    [`${config.srcDir}/index.html`, `${config.srcDir}/favicon.ico`],
    () => {runSequence('copy-index', bs.reload);}
  );
  gulp.watch([`${config.srcDir}/**/*.js`, `${config.srcDir}/*.js`], ['lint']);
  // js sources are watched by webpack
});
