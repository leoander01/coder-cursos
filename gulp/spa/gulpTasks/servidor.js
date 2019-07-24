const gulp = require('gulp');
const watch = require('gulp-watch');
const webserver = require('gulp-webserver');

gulp.task('monitoraMudancas', () => {
    watch('src/**/*.html', () => gulp.start('app.html'));
    watch('src/**/*.scss', () => gulp.start('app.css'));
    watch('src/**/*.js', () => gulp.start('app.js'));
    watch('src/assets/imgs/**/*.*', () => gulp.start('app.imgs'));
});

gulp.task('servidor',  ['monitoraMudancas'], () => {
    return gulp.src('build').pipe(webserver({
        livereload: true,
        port: 8080,
        open: true
    }));
});