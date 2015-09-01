
var gulp = require('gulp');
var runSequence = require('run-sequence');

require('swf-lambda-decider-gulp-tasks')(gulp);

gulp.task('deploy', function(callback) {
  return runSequence(
    ['clean'],
    ['js', 'node-mods'],
    // ADD ANY FILE YOU WANT TO THE dist/ folder
    ['zip'],
    ['upload'],
    ['register'],
    callback
  );
});
