const {
    src,
    dest,
    watch,
    series
} = require('gulp')
const sass = require('gulp-sass')(require('sass'));
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('rax-boi/**/*.scss')
        .pipe(sass())
        // .pipe(purgecss({ only when use
        //     content: ['*.html']
        // }))
        .pipe(dest('css'))
}

function watchTask() {
    watch(['rax-boi/**/*.scss','*.html'], buildStyles)
}

exports.default = series(buildStyles, watchTask)