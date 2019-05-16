const gulp = require('gulp')
const watch = require('gulp-watch')
// const webserver = require('gulp-webserver')
const browserSync = require('browser-sync').create();

gulp.task('monitorarMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'))
    watch('src/**/*.css', () => gulp.start('app.css'))
    watch('src/**/*.js', () => gulp.start('app.js'))
    watch('src/img/**/*.*', () => gulp.start('app.imgs'))
})

// gulp.task('servidor', ['monitorarMudancas'], () => {
//     return gulp.src('build').pipe(webserver({
//         livereload: true,
//         port: 9000,
//         open: true
//     }))
// })

gulp.task('servidor', ['monitorarMudancas'], () => {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        ui : { port: 9001},
        port: 9000
    });
})