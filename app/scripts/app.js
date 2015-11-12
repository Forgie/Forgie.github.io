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
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl',
        controllerAs: 'projects' 
      })
      .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeCtrl',
        controllerAs: 'resume'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
