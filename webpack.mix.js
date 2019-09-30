const mix = require('laravel-mix');

mix
    .js('src/js/index.js', 'dist/bundle.js')
    .sass('src/styles/main.scss', 'dist/app.css')
    .copy('src/index.html', 'dist/index.html')
    .copy('src/audio/woof.mp3', 'dist/audio/woof.mp3')
    .setPublicPath('./dist/')
    .browserSync({
        host: 'localhost',
        port: 3000,
        proxy: null,
        server: { baseDir: ['./dist/'] }
    });

    