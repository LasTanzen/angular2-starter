import gulp from 'gulp';
import config from '../config';

gulp.task('copy-index', function(cb) {
  return gulp.src([`${config.srcDir}/index.html`, `${config.srcDir}/favicon.ico`])
  .pipe(gulp.dest(config.buildDir));
  cb();
});
