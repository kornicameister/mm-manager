/**
 * App state name
 * @type {string}
 */
export const name = 'mm';

/**
 *
 * @param $stateProvider
 * @param $urlRouterProvider
 * @ngInject
 */
export default function appState($stateProvider, $urlRouterProvider) {
  const state = {
    name  : name,
    master: true,
    url   : '/',
    views : {
      '@'        : {
        controller      : 'appController',
        controllerAs    : 'vm',
        bindToController: true,
        templateUrl     : require('./app.tpl.html')
      },
      'controls@': {}
    }
  };
  $stateProvider.state(state);
  $urlRouterProvider.otherwise(`${state.url}`);
}