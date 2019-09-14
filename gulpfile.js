var gulp = require('gulp');



gulp.task('copy', function(){
   return gulp.src('project/index.html')
      .pipe(gulp.dest('dist/html'))

});
