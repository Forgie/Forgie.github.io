'use strict';

/**
 * @ngdoc overview
 * @name forgiegithubioApp
 * @description
 * # forgiegithubioApp
 *
 * Main module of the application.
 */
angular
  .module('forgiegithubioApp', [
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
