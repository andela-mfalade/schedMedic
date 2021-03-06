'use strict';

var gulp = require( 'gulp' ),
    jade = require( 'gulp-jade' );

gulp.task( 'jade', function() {
  var YOUR_LOCALS = {};

  gulp.src( './app/views/**/*.jade' )
    .pipe(jade({
      locals: YOUR_LOCALS
    }) )
    .pipe( gulp.dest( './public/modules/views/' ) )
});
