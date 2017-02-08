/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': 'node_modules/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            app: 'app',

            // angular bundles
            '@angular/core': 'js/@angular/core.umd.js',
            '@angular/common': 'js/@angular/common.umd.js',
            '@angular/compiler': 'js/@angular/compiler.umd.js',
            '@angular/platform-browser': 'js/@angular/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'js/@angular/platform-browser-dynamic.umd.js',
            '@angular/http': 'js/@angular/http.umd.js',
            '@angular/router': 'js/@angular/router.umd.js',
            '@angular/forms': 'js/@angular/forms.umd.js',

            // other libraries
            'rxjs': 'js/rxjs'
        },
        meta: {
            'typescript': {
                "exports": "ts"
            }
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: '/main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                defaultExtension: 'js'
            }
        }
    });
})(this);