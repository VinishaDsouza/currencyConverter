var gulp   = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		concat = require('gulp-concat'),
		minifyCSS = require('gulp-minify-css'),
		sass = require('gulp-sass'),
		uglify = require('gulp-uglify');

gulp.task('styles', function() {
	return gulp.src('./styles/*.scss')
		.pipe(sass())
		.pipe(minifyCSS())
		.pipe(concat('style.css'))
		.pipe(autoprefixer('last 5 version', 'safari 12', 'ie 11', 'opera 12.1'))
		.pipe(gulp.dest('./'))
});

gulp.task('scripts', function () {
	return gulp.src('./js/scripts.js')
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('./js'))
});

gulp.task('watch', function() {
	gulp.watch('styles/**/*.scss', ['styles']);
	gulp.watch('./js/**/*.js', ['scripts']);
});

gulp.task('default', ['styles', 'scripts', 'watch']);