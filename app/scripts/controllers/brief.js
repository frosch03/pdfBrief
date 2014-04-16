'use strict';

angular.module('angularApp')
  .controller('BriefCtrl', function ($scope) {
    $scope.absender = { vname: 'Kurt',
                        nname: 'Deuter',
                        street: 'Steinstraße',
                        nr: '1',
                        postnr: '72074',
                        city: 'Tübingen'
                      };

    $scope.empfaenger = { vname: 'Heinz Rüdiger',
                          nname: 'Reudig',
                          street: 'Scherenstraße',
                          nr: '2',
                          postnr: '1000',
                          city: 'Bonn'
                        };

    $scope.meta = { subject: '...',
                    date: '13. 04. 1982',
                    opening: 'Sehr geehrter Herr',
                    closing: 'Mit freundlichen Grüßen'
                  };
  });
