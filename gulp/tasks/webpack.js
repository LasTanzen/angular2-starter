import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import browserSync from 'browser-sync';
import wpConfig from './config/webpack.config.js';

gulp.task('webpack', function(cb) {
  let initial = true;
  let wpBuild = webpack(wpConfig);

  function callback(err, stats) {
    if(err) throw new gutil.PluginError("webpack", err);
    gutil.log(`Webpack built in ${stats.toJson().time}ms - ${stats.toJson().errors}`);
    if (initial === true) {
      initial = false;
      cb();
    }
    if (GLOBAL.bsName) {
      let bs = browserSync.get(GLOBAL.bsName);
      bs.reload();
    }
  }

  if (GLOBAL.environment === 'development') {
    wpBuild.watch({aggregateTimeout: 100}, callback);
  } else {
    wpBuild.run(callback);
  }
});
