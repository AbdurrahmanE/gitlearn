var gulp = require('gulp');
var concat = require('gulp-concat');


gulp.task('copy', function(){
   return gulp.src('project/index.html')
      .pipe(gulp.dest('dist/html'))

});

gulp.task('css', function(){
  return gulp.src('project/*.css')
           .pipe(concat('main.css'))
           .pipe(gulp.dest('dist'))

})

gulp.task('scripts', function(){
  return gulp.src('project/*.js')
           .pipe(concat('all.js'))
           .pipe(gulp.dest('dist'))

})
