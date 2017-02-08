var config = require('../gulp-config')().styles;
var gulp = require('gulp');
var sass = require('gulp-sass');


gulp.task('styles', function () {
  return gulp.src(config.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest));
});
 
gulp.task('styles:watch', function () {
  gulp.watch(config.src, ['styles']);
});
