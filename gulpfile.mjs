// Import Gulp and plugins using ES module syntax
import gulp from 'gulp';
import * as dartSass from 'sass'; // Changed to dartSass to avoid conflict
import gulpSass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer';
import browserSync from 'browser-sync';

// Initialize gulp-sass with dartSass
const sass = gulpSass(dartSass);

// Paths to your SASS, CSS, and other assets
const paths = {
    styles: {
        src: 'scss/**/*.scss',
        dest: 'css/'
    },
    html: {
        src: './**/*.html'
    },
    js: {
        src: './js/**/*.js'
    }
};

// Compile SASS to CSS
export function styles() {
    return gulp.src(paths.styles.src)
        .pipe(sourcemaps.init()) // Initialize sourcemaps
        .pipe(sass().on('error', sass.logError)) // Compile SASS
        .pipe(autoprefixer()) // Add vendor prefixes
        .pipe(sourcemaps.write()) // Write sourcemaps
        .pipe(gulp.dest(paths.styles.dest)) // Output CSS
        .pipe(browserSync.stream()); // Inject changes without reloading
}

// Minify CSS for production
export function minifyCSS() {
    return gulp.src(`${paths.styles.dest}/main.css`)
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(paths.styles.dest));
}

// Watch files for changes
export function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch(paths.styles.src, styles); // Watch .scss files
    gulp.watch(paths.html.src).on('change', browserSync.reload); // Reload on HTML change
    gulp.watch(paths.js.src).on('change', browserSync.reload); // Reload on JS change
}

// Default task
export default gulp.series(styles, watch);
