// including plugins
var gulp = require('gulp');
var uglify = require("gulp-uglify");
var rename = require('gulp-rename');
var concat = require('gulp-concat');

var jsFile = './app/**/*.js';

// task
gulp.task('minify-js', function () {
    gulp.src(jsFile) // path to your files
        .pipe(concat('scripts.js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./app/dist'));
});