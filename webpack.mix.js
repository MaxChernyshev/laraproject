const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);



// ADMIN
mix.js([
    // 'resources/js/admin/app.js',
    'node_modules/admin-lte/dist/js/adminlte.js',
    // '~plugins/jquery/jquery.min.js',
    // '~plugins/bootstrap/js/bootstrap.bundle.min.js',
    // '~dist/js/adminlte.min.js',
], 'public/js/admin/js')
    .copy('node_modules/admin-lte/dist/css/adminlte.css', 'public/css/admin/css')
    // .sass('node_modules/admin-lte/dist/css/adminlte.css', 'public/css/admin/css')
    .sourceMaps();
