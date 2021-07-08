var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');


// require tasks directory
requireDir('./tasks', {recurse: true});


// tasks definitions
gulp.task('default', ['build']);
gulp.task('build', build);


// methods definitions
function build() {
  runSequence(
    'build:vendors',
    'build:app',
    'styles',
    'webserver'
  );
}