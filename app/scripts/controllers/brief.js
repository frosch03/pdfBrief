'use strict';

angular.module('angularApp')
  .controller('BriefCtrl', function ($scope, upload) {
    $scope.absender = {
        vname: 'Kurt',
        nname: 'Deuter',
        street: 'Steinstraße',
        nr: '1',
        postnr: '72074',
        city: 'Tübingen'
    };

    $scope.empfaenger = {
        vname: 'Heinz Rüdiger',
        nname: 'Reudig',
        street: 'Scherenstraße',
        nr: '2',
        postnr: '1000',
        city: 'Bonn'
    };

    $scope.meta = {
        subject: '...',
        date: '13. 04. 1982',
        opening: 'Sehr geehrter Herr',
        closing: 'Mit freundlichen Grüßen'
    };

    // $scope.uploadConfig = {
    //     url: 'http://localhost:8080/upload',
    //     data: {
    //         extradata: $scope.myFile
    //         // Will contain the file or files when sent with the upload-button
    //     }
    // };

    $scope.onSuccess = function (response) {
        console.log('hello');
        console.log(response.data);
    };

    $scope.doUpload = function () {
        upload({
            url: 'http://localhost:8080/upload',
            data: {
                // anint: 123,
                // aBlob: Blob([1,2,3]), // Only works in newer browsers
                aFile: $scope.myFile // a jqLite type="file" element, upload() will extract all the files from the input and put them into the FormData object before sending.
            }
        }).then(
            function (response) {
                console.log(response.data); // will output whatever you choose to return from the server on a successful upload
            },
            function (response) {
                console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
            }
        );
    };
  });
