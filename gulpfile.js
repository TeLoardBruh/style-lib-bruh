const {
    src,
    dest,
    watch,
    series
} = require('gulp')
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
    return src('rax-boi/**/*.scss')
        .pipe(sass())
        .pipe(dest('css'))
}

function watchTask() {
    watch(['rax-boi/**/*.scss'], buildStyles)
}

exports.default = series(buildStyles, watchTask)