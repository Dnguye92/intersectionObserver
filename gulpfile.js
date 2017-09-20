// require your gulp packages here
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// create tasks for the packages you've required
// the .task() function takes two parameters - 
// 1st. name of task 2nd. callback function
// the default task is the task that kicks off all of the other tasks

// tasks normally are src'd then piped through to the dest
// use globs to match patterns/filenames
// create a watch task to watch files for any updates and automatically refreshes
gulp.task('scripts', function() {
	gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
	.pipe(rename({suffix: '.min'}))
	.pipe(uglify())
	.pipe(reload({
		stream: true
	}))
	.pipe(gulp.dest('app/js'));
})

// create html task
gulp.task('html', function() {
	gulp.src('app/**/*.html')
	.pipe(reload({
		stream: true
	}))
});

// create Sass tasks
gulp.task('sass', function() {
	gulp.src('app/scss/**/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	})
	.on('error', sass.logError))
	.pipe(autoprefixer('last 2 versions'))
	.pipe(rename({suffix: '.min'}))
	.pipe(gulp.dest('app/css'))
	.pipe(reload({
		stream: true
	}))
})

// create browser sync task
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: ['./', './app/']
		}
	})
});

// create watch task
gulp.task('watch', function() {
	gulp.watch('app/js/**/*.js', ['scripts']);
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', ['html']);
})

// create default task here
// the name of the tasks that you've created will go inside of the array
gulp.task('default', ['scripts', 'html' ,'browser-sync', 'watch']);

