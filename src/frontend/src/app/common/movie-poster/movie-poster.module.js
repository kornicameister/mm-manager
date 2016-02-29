import angular from 'angular';
import ngMaterial from 'angular-material';

import MMMoviePosterDirective from './movie-poster.directive';
import './movie-poster.less';

export default angular
  .module('mm-manager.app.common.moviePoster', [
    ngMaterial
  ])
  .directive('mmMoviePoster', MMMoviePosterDirective.factory);