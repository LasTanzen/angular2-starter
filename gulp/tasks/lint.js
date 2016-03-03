import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../config';

gulp.task('lint', () => {
  return gulp.src([
    `${config.srcDir}/**/*.js`,
    `${config.srcDir}/*.js`]
  )
  .pipe(eslint())
  .pipe(eslint.format())
});
