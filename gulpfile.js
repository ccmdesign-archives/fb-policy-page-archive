// Gulpfile
var gulp = require('gulp');
var sass = require('gulp-sass');
var data = require('gulp-data');
var browserSync = require('browser-sync').create();
var del = require('del');

// Serve - Starts the server and watch files changes
gulp.task('serve', ['sass', 'html', 'images', 'videos', 'js', 'pdfs'], function() {
  browserSync.init({
    server: {baseDir: './dist'},
    open: false
  });

  gulp.watch('src/scss/**/*.scss', ['sass-watch']);
  gulp.watch('src/js/*.js', ['js-watch']);
  gulp.watch('src/templates/*.html', ['html-watch']);
});

// HTML
gulp.task('html', function() {
  return gulp
    .src('src/templates/*.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('html-watch', ['html'], function(done) {
  browserSync.reload();
  done();
});

// Images
gulp.task('images', function() {
  return gulp
    .src('src/images/*')
    .pipe(gulp.dest('dist/images'));
});

// Videos
gulp.task('videos', function() {
  return gulp
    .src('src/videos/*')
    .pipe(gulp.dest('dist/videos'));
});

// PDFs
gulp.task('pdfs', function() {
  return gulp
    .src('src/pdfs/*.pdf')
    .pipe(gulp.dest('dist/pdfs'));
});

// CNAME
gulp.task('pdfs', function() {
  return gulp
    .src('src/CNAME')
    .pipe(gulp.dest('dist'));
});

// JS
gulp.task('js', function() {
  return gulp
    .src('src/js/*.js')
    .pipe(gulp.dest('dist/js'));
});

gulp.task('js-watch', ['js'], function(done) {
  browserSync.reload();
  done();
});

// Sass - Compiles sass files to css files
gulp.task('sass', function() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass()).on('error', sass.logError)
    .pipe(gulp.dest('dist/css'));
});

gulp.task('sass-watch', ['sass'], function(done) {
  browserSync.reload();
  done();
});

// Clean - Deletes the dist folder
gulp.task('clean', function() {
  return del(['dist']);
});

// Default task
gulp.task('default', ['serve']);
