'use strict';

angular
  .module('angularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'lr.upload'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
//        templateUrl: 'views/main.html',
//        controller: 'MainCtrl'
        templateUrl: 'views/brief.html',
        controller: 'BriefCtrl'
      })
      .when('/myroute', {
        templateUrl: 'views/myroute.html',
        controller: 'MyrouteCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
