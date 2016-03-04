'use strict';

var gulp = require('gulp'),
  pkg = require('./package.json'),
  runSequence = require('run-sequence'),
  rimraf = require('gulp-rimraf'),
  sass = require('gulp-sass'),
  plumber = require('gulp-plumber'),
  ts = require('gulp-typescript'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  config = require('./gulp-config'),
  inject = require('gulp-inject'),
  naturalSort = require('gulp-natural-sort'),
  webserver = require('gulp-webserver'),  
  
  tsConfig = {
    target: 'ES5',
		// noImplicitAny: true,    
    removeComments: false,
    noExternalResolve: false
  };  

// clean  
gulp.task('clean', function () {
  return gulp.src(['css/', 'scripts/**/*.js'], { read: false }) // much faster
    .pipe(rimraf());
});  

// compile sass files 
gulp.task('sass', function () {
  return gulp.src(config.src.styles)
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(config.dest))
    .pipe(gulp.dest(config.styles));
});

// compile typescript(ts) files 
gulp.task('typescript', function () {
	return gulp.src(config.src.ts)
    .pipe(sourcemaps.init())
    .pipe(ts(tsConfig))
    .js
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.scripts));
});

// inject dependecies on index page
gulp.task('inject', function () {
  var target = gulp.src(['index.html']);
  var sources = gulp.src(['dist/**/*.css', 'scripts/**/*.js'], 
    { read: false })
    .pipe(naturalSort());

  return target.pipe(inject(sources, {
    relative: true
  }))
    .pipe(gulp.dest('.'));
});

// watch changes in sass/ts/html files 
gulp.task('watch', function () {
  gulp.watch('scripts/**/*.ts', ['typescript']);
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

// default gulp tasks
gulp.task('default', function () {
  runSequence(
    'clean',
    'sass',
    'typescript',
    'inject',
    'watch',
    'webserver'
    );
});