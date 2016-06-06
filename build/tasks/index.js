'use strict';

import gulp from 'gulp';
import gulpInject from 'gulp-inject';
import gulpIf from 'gulp-if';
import gulpHtmlMin from 'gulp-htmlmin';
import path from 'path';

import conf from '../conf';

export function index(isProduction = false) {
  return () => {
    let indexPath = conf.build.dir;

    let injectStyles = gulp.src(path.join(indexPath, '**/*.css'), {read: false});
    let injectScripts = gulp.src([
      path.join(indexPath, `**/${conf.build.vendorFile}`),
      path.join(indexPath, `**/${conf.build.jsFile}`)
    ], {read: false});

    let injectOptions = {
        ignorePath: [
            path.relative(conf.basePath, indexPath),
            'dist'
        ],
        addRootSlash: false,
        quiet: true
    };

    gulp.src(path.join(conf.paths.client, './index.html'))
        .pipe(gulpInject(injectStyles, injectOptions))
        .pipe(gulpInject(injectScripts, injectOptions))
        .pipe(gulpIf(
            isProduction,
          gulpHtmlMin()
        ))
        .pipe(gulp.dest(indexPath));
  };
}
