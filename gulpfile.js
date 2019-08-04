const gulp = require('gulp');
const sass = require('gulp-sass');
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const sourceMaps = require ('gulp-sourcemaps');
const imagemin = require ('gulp-imagemin');
const imageminJpegRecompress = require ('imagemin-jpeg-recompress');
const pngquant = require ('imagemin-pngquant');
const run = require ('run-sequence');
const del = require ('del');
const svgmin = require ('gulp-svgmin');
const replace = require ('gulp-replace');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');

gulp.task('move-php', function(){
	return gulp.src(['src/*.php'])
		.pipe(gulp.dest('build'))
		.pipe(browserSync.reload({stream: true}));
})

gulp.task('move-css', function(){
  return gulp.src(
      ['src/less/bootstrap.css', 'src/less/slick.css', 'src/less/slick-theme.css', 
      'src/less/animate.css', 'src/less/all.css'])
  .pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
  .pipe(concat("all_styles.css"))
  .pipe(cleanCSS())
  .pipe(gulp.dest('build/css'));
  ;
});

gulp.task('sass', function(){
	return gulp.src('src/scss/*.scss')
		.pipe(plumber())
		.pipe(sourceMaps.init())
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
		.pipe(sourceMaps.write())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('less', function () {
  return gulp.src('src/less/**/*.less')
    .pipe(less())
    .pipe(autoprefixer({
			browsers: ['last 2 version']
		}))
    .pipe(concat('style.css'))
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function(){
	return gulp.src('src/*.html')
		.pipe(gulp.dest('build'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function(){
	return gulp.src(['src/js/jquery-3.4.1.js', 'src/js/bootstrap.js', 'src/js/slick.js', 'src/js/wow.min.js', 
					'src/js/jquery.mask.js', 'src/js/rellax.js', 'src/js/script.js'])
	 	.pipe(concat('all.js'))
		.pipe(uglify())
		.pipe(gulp.dest('build/js'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function(){
	return gulp.src('src/img/**/*.{png,jpeg,jpg}')
		.pipe(imagemin([
				imagemin.jpegtran({progressive: true}),
				imageminJpegRecompress({
					loops: 5,
					min: 40,
					max: 50,
					quality: 'medium'
				}),
				 imagemin.optipng({optimizationLevel: 6}),
				 pngquant({speed: 5, quality: [0.4, 0.5]})
			]))
		.pipe(gulp.dest('build/img'))
});

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*')
		.pipe(gulp.dest("build/fonts"))

});

gulp.task('otherFolders', function() {
	return gulp.src(['src/mailer/**/*'], {base: 'src/'})
		.pipe(gulp.dest("build"))

});

gulp.task('svg', function(){
	return gulp.src('src/img/**/*.svg')
		.pipe(svgmin({
			js2svg: {
				pretty: true
			}
		}))
		.pipe(replace('&gt:', '>'))
		.pipe(gulp.dest('build/img'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function(){
		browserSync.init({
			server: 'build'
		});

		gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
		gulp.watch("src/less/**/*.less", gulp.series("less"));
		gulp.watch("src/*.html", gulp.series("html"));
		gulp.watch("src/js/**/*.js", gulp.series("js"));
		gulp.watch("src/img/**/*.{png,jpg,jpeg}", gulp.series("images")); 
		gulp.watch("src/img/**/*.{svg}", gulp.series("svg"));
		gulp.watch("src/less/*.css", gulp.series("move-css"));
		gulp.watch("src/*.php", gulp.series("move-php"));
		gulp.watch(['src/mailer/**/*'], gulp.series("otherFolders"));
});

gulp.task('clean', function(){
	return del('build');
});

gulp.task('build', gulp.series(['clean', 'html', 'move-css', 'move-php', 'otherFolders', 'fonts', 'sass', 'less', 'images', 'svg', 'js']));



