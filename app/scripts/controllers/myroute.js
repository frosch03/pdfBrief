'use strict';

angular.module('angularApp')
  .controller('MyrouteCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.absender = { vname: 'Kurt'
                      , nname: 'Deuter'
                      , street: 'Schwabstraße'
                      , nr: '34/1'
                      , postnr: '72074'
                      , city: 'Tübingen'
                      };
    $scope.ini = $scope.absender.vname.charAt(0);
  });
