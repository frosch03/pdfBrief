'use strict';

var app = angular.module('angularApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'lr.upload',
    'ui.format',
    'ui.bootstrap',
    'xeditable',
    'angularLocalStorage'
  ]);

app.config(function ($resourceProvider, $routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/brief.html',
        controller: 'BriefCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .otherwise('/');
  });



app.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});
