var gulp = require('gulp');
var requireDir = require('require-dir');
var runSequence = require('run-sequence');


// require tasks directory
requireDir('./tasks', {recurse: true});


// tasks definitions
gulp.task('default', ['dev']);
gulp.task('dev', dev);


// methods definitions
function dev() {
  runSequence(
    'build:vendors',
    'build:app',
    'styles',
    'styles:watch'
  );
}