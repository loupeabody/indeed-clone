var gulp = require('gulp'),
		sass = require('gulp-sass'),
		haml = require('gulp-haml'),
		livereload = require('gulp-livereload')

var paths = {
	styles: ['styles/modules/*.sass','styles/style.sass'],
	templates: ['templates/*.haml']
}

gulp.task('styles', function() {
	return gulp.src('styles/style.sass')
		.pipe(sass())
		.pipe(gulp.dest('./styles'))
		.pipe(livereload())
})

gulp.task('templates', function() {
	return gulp.src(paths.templates)
		.pipe(haml())
		.pipe(gulp.dest('./'))
		.pipe(livereload())
})

gulp.task('watch', function() {
	livereload.listen()
	gulp.watch(paths.styles, ['styles'])
	gulp.watch(paths.templates,['templates'])
})

gulp.task('default', ['watch'])