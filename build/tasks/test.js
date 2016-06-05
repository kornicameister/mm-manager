'use strict';

import gulp from 'gulp';
import gutil from 'gulp-util';
import mocha from 'gulp-mocha';

import conf from '../conf';

const LOG = gutil.log;
const COLORS = gutil.colors;

export function testUnit() {
  return (done) => {
    done();
  };
}

export function testE2E() {
  return (done) => {
    done();
  };
}

export function testBackend() {
  return ()=> {
    LOG(COLORS.green('Backend test'));

    const srcOpts = {
      read: false
    };

    const mochaOpts = {
      ui       : 'bdd',
      reporter : 'list',
      bail     : true,
      fullTrace: true,
      require  : [
        'babel-core/register',
        'babel-polyfill'
      ]
    };

    return gulp
      .src(conf.backend.specs, srcOpts)
      .pipe(mocha(mochaOpts))
      .once('error', LOG)
  }
}

export function testBackendWatch() {
  return ()=> {
    gulp.watch(conf.backend.specs, ['test:backend:once']);
  }
}
