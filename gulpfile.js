// 声明依赖
var gulp = require('gulp');
var gulpShell = require('gulp-shell');
var runSequence = require('run-sequence');

var exec = require('child_process').exec;
var clean = require('gulp-clean');
var postcss = require('gulp-postcss');
var atImport = require('postcss-import');
var csswring = require('csswring');
var plumber = require('gulp-plumber');

// 清理现有文件
gulp.task('clean', function () {
    return gulp.src(['app/scripts-build/'], { read: false })
        .pipe(clean());
});

gulp.task('webpackDev', gulpShell.task([
    'webpack --progress --watch --config=webpack.config.js'
]));

gulp.task('webpackProd', gulpShell.task([
    'webpack --env.prod --config=webpack.config.js'
]));

gulp.task('npm-prune', function(cb) {
    exec('npm prune', function(err, stdout, stderr) {
        if (stdout) {
            console.log('npm prune: ' + stdout);
        }
        cb(err);
    });
});

gulp.task('npm-install', function(cb) {
    exec('npm install', function(err, stdout, stderr) {
        console.log('[npm install]stdout : ' + stdout);
        console.log('[npm install]stderr : ' + stderr);
        cb(err);
    });
});

// 开发环境构建任务
gulp.task('dev', function() {
    return runSequence('npm-prune', 'npm-install', 'clean','webpackDev');
});

gulp.task('default', ['dev']);

// 生产环境构建任务
gulp.task('prod', function() {
    return runSequence('npm-prune', 'npm-install', 'clean', 'webpackProd');
});

gulp.task('pub', ['prod']);

// CI构建任务
gulp.task('ci', function() {
    return runSequence('npm-prune', 'npm-install', 'clean', 'webpackProd');
});
