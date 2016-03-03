import gulp from 'gulp';
import {Server} from 'karma';
import config from '../config.js';

gulp.task('unit', function (cb) {
  new Server({
    configFile: `${__dirname}/config/karma.config.js`,
    singleRun: true
  }, cb).start();
});
