var gulp = require('gulp');
var gulpUtil = require('gulp-util');
var gulpIf = require('gulp-if');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var bowerFiles = require('main-bower-files');
var ngAnnotate = require('gulp-ng-annotate');
var ngFileSort = require('gulp-angular-filesort');
var sourceMaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var streamqueue = require('streamqueue');
var minifyCss = require('gulp-minify-css');

var config = {
  paths: {
    build: "public/",
    js: ['app/**/*.js'],
    sass: ['app/**/*.scss'],
    css: ['app/**/*.css',
          "bower_components/angular-chart.js/dist/angular-chart.css",
          "bower_components/angularjs-slider/dist/rzslider.css",
          "bower_components/sweetalert/dist/sweetalert.css"]
  },
  isProduction: gulpUtil.env.production
};

gulp.task('default', ['watch', 'js', 'css']);

gulp.task('watch', function() {
  gulp.watch(config.paths.js, ['js']);
  gulp.watch(config.paths.sass, ['css']);
});

gulp.task('js', function() {
  return gulp.src(config.paths.js)
    .pipe(gulpIf(!config.isProduction, plumber()))
    .pipe(gulpIf(!config.isProduction, sourceMaps.init()))
    .pipe(ngFileSort())
    .pipe(ngAnnotate())
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulpIf(!config.isProduction, sourceMaps.write()))
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('css', function() {
  return streamqueue({ objectMode: true },
      gulp.src(config.paths.css),
      gulp.src(config.paths.sass)
        .pipe(sass().on('error', sass.logError))
    )
    .pipe(concat('styles.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest(config.paths.build));
});

gulp.task('vendorjs', function() {
  return gulp.src(bowerFiles('/**/*.js'))
    .pipe(gulpIf(!config.isProduction, sourceMaps.init()))
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulpIf(!config.isProduction, sourceMaps.write()))
    .pipe(gulp.dest(config.paths.build));
});
