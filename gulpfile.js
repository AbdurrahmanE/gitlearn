var gulp = require('gulp'),
    concat = require('gulp-concat'),
    prefix = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    pug = require('gulp-pug');

//copile pugjs with gulp and make it pretty
gulp.task('html', function(){
   return gulp.src('project/index.pug')
       .pipe(pug({pretty: true}))
       .pipe(gulp.dest('dist'))

});
//copy file with gulp from project to dist file
gulp.task('copy', function(){
   return gulp.src('project/index.html')
      .pipe(gulp.dest('dist/html'))

});
//Concatenate CSS and JS Files In One File to be compressed and fit to last 2 versions browser
gulp.task('css', function(){
  return gulp.src('project/css/main.scss')
           .pipe(sass({outputStyle: 'compressed'}))
           .pipe(prefix('last 2 versions'))
           .pipe(concat('test sass.css'))
           .pipe(gulp.dest('dist'))

});

gulp.task('scripts', function(){
  return gulp.src('project/*.js')
           .pipe(concat('all.js'))
           .pipe(gulp.dest('dist'))

});
