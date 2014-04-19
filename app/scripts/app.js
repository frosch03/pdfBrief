'use strict';

var app = angular.module('angularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'lr.upload',
    'ui.format',
    'ui.bootstrap',
    'xeditable'
  ]);

app.config(function ($routeProvider) {
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



app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

