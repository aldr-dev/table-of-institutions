import gulp from 'gulp';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);
import concat from 'gulp-concat';
import autoprefixer from 'gulp-autoprefixer';

const paths = {
  styles: './src/**/*.{scss, module.scss}',
  output: './src/assets/',
};

function buildScssFromCss() {
  return gulp
    .src(paths.styles)
    .pipe(sass().on('error', sass.logError))
    .pipe(
      autoprefixer({
        cascade: false,
        overrideBrowserslist: ['last 2 versions', '> 1%', 'ie 11'],
      }),
    )
    .pipe(concat('style.css'))
    .pipe(gulp.dest(paths.output));
}

function watch() {
  gulp.watch(paths.styles, buildScssFromCss);
}
gulp.task('default', gulp.series(watch));
