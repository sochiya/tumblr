var gulp      = require('gulp');
var sass      = require('gulp-ruby-sass');
var plumber   = require('gulp-plumber');
var pleeease  = require('gulp-pleeease');
var jade      = require('gulp-jade');
var pug       = require('gulp-pug');

// sass
gulp.task('sass', function () {
  return sass('src/sass/', { bundleExec: true })
    .on('error', function (err) {
      console.error('Error!', err.message);
    })
    .pipe(plumber())
    .pipe(gulp.dest('public/assets/css'));
});

// pug
gulp.task('views', function buildHTML() {
  return gulp.src('src/pug/*.pug')
  .pipe(pug({ pretty: true }))
  .pipe(gulp.dest('public'))
});

// jade
gulp.task('jade', function () {
  gulp.src('src/jade/**/*.jade')
    .pipe(plumber())
    .pipe(jade())
    .pipe(gulp.dest('public/'));
});

gulp.task('copy', function() {
  gulp.src('public/assets/css/*.css')
    .pipe(gulp.dest('docs/css/'));
  gulp.src('public/assets/img/*')
    .pipe(gulp.dest('docs/img/'));
});

// watch
gulp.task('watch', function () {
  gulp.watch('src/sass/**/*.sass', ['sass']);
  gulp.watch('src/jade/**/*.jade', ['jade']);
});
