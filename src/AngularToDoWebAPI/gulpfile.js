"use strict";

var gulp = require('gulp');
var clean = require('gulp-clean');

var appRoot = "./wwwroot/app";
var webRoot = "./wwwroot/";
var jsRoot = "./wwwroot/js";

var paths = {
    nodeModules: './node_modules/'
};

// Delete the app directory
gulp.task('clean', function () {
    return gulp.src([appRoot, jsRoot])
    .pipe(clean());
});

gulp.task('copyJSLibs', function () {
    // Copy node_module js files across
    gulp.src([paths.nodeModules + 'zone.js/dist/zone.js',
              paths.nodeModules + 'reflect-metadata/Reflect.js',
              paths.nodeModules + 'core-js/client/shim.min.js',
              paths.nodeModules + 'systemjs/dist/system.src.js'])
        .pipe(gulp.dest(jsRoot));


    // Angular2
    gulp.src([paths.nodeModules + '@angular/core/bundles/core.umd.js',
              paths.nodeModules + '@angular/common/bundles/common.umd.js',
              paths.nodeModules + '@angular/compiler/bundles/compiler.umd.js',
              paths.nodeModules + '@angular/platform-browser/bundles/platform-browser.umd.js',
              paths.nodeModules + '@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
              paths.nodeModules + '@angular/http/bundles/http.umd.js',
              paths.nodeModules + '@angular/router/bundles/router.umd.js',
              paths.nodeModules + '@angular/forms/bundles/forms.umd.js'])
        .pipe(gulp.dest(jsRoot + '/@angular'));

    // Copy across the Reactive Extensions files, in the same structure as they are found (as this needs to be preserved)
    gulp.src([paths.nodeModules + 'rxjs/**/*.js'], { base: "node_modules/rxjs" })
        .pipe(gulp.dest(jsRoot + '/rxjs'))
});

//gulp.task('thirdparty', function () {
//    gulp.src('./node_modules/core-js/**/*.js')
//        .pipe(gulp.dest('./wwwroot/node_modules/core-js'));
//    gulp.src('./node_modules/@angular/**/*.js')
//        .pipe(gulp.dest('./wwwroot/node_modules/@angular'));
//    gulp.src('./node_modules/zone.js/**/*.js')
//        .pipe(gulp.dest('./wwwroot/node_modules/zone.js'));
//    gulp.src('./node_modules/systemjs/**/*.js')
//        .pipe(gulp.dest('./wwwroot/node_modules/systemjs'));
//    gulp.src('./node_modules/reflect-metadata/**/*.js')
//        .pipe(gulp.dest('./wwwroot/node_modules/reflect-metadata'));
//    gulp.src('./node_modules/rxjs/**/*.js')
//        .pipe(gulp.dest('./wwwroot/node_modules/rxjs'));
//    gulp.src('./app/systemjs.config.js')
//        .pipe(gulp.dest('./wwwroot/'));

//});

gulp.task('copyHTML', function () {
    gulp.src('./app/**/*.html')
        .pipe(gulp.dest(appRoot));
});

gulp.task('watch', function () {
    gulp.watch('./app/**/*.html', ['copyHTML']);
});

gulp.task('default', function () {
    // place code for your default task here
});