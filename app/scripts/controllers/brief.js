'use strict';

angular.module('angularApp')
  .controller('BriefCtrl', function ($scope) {
      $scope.absender = {
        vname: '',
        nname: '',
        street: '',
        nr: '',
        postnr: '',
        city: ''
      };

      $scope.empfaenger = {
        vname: '',
        nname: '',
        street: '',
        nr: '',
        postnr: '',
        city: ''
      };

      $scope.meta = {
        abs: $scope.absender,
        empf: $scope.empfaenger,
        txt: '',
        subject: '',
        date: '',
        opening: '',
        closing: ''
      };

      // $scope.out = function ($scope) {
      //     return $scope.meta.betreff;
      // };

      // $scope.out.changeEvent(functon

      // $scope.updateOut = function(){
      //     $scope.out = $scope.absender.vname;
      // };


      $scope.header =
          '\\documentclass[fontsize=11pt]{scrlttr2}\n' +
          '\\usepackage[T1]{fontenc}\n' +
          '\\usepackage[utf8]{inputenc}\n' +
          '\\usepackage[ngerman]{babel}\n' +
          '\\usepackage{babel}\n' +
          '\\usepackage{ngerman}\n' +
          '\\usepackage{microtype}\n' +
          '\\usepackage[right]{eurosym}\n' +
          '\\usepackage{graphics}\n' +
          '\\usepackage{eurosym}\n' +
          '\\usepackage{etoolbox}\n' +
          '\\usepackage{pdfpages}\n' +
          '% \\usepackage{ifthen}\n' +
          '\n' +
          '\\newcommand{\\pic}[2][0.9] { %pic figure einfügen, [Skalierung], {Dateiname ohne Endung}\n' +
          '  \\scalebox{#1}{\n' +
          '    \\includegraphics{#2}\n' +
          '  }\n' +
          '}\n' +
          '\n' +
          '\\newcommand{\\Anrede}[2]{\n' +
          '  \\ifthenelse{\\equal{#1}{Herr}}\n' +
          '  {Sehr geehrter Herr #2,}{\n' +
          '    \\ifthenelse{\\equal{#1}{Frau}}\n' +
          '    {Sehr geehrte Frau #2,}\n' +
          '    {Sehr geehrte Damen und Herren,}\n' +
          '  }\n' +
          '}\n' +
          '\n' +
          '\\KOMAoptions\n' +
          '  { paper=a4\n' +
          '  , fromrule=below\n' +
          '  , parskip=full\n' +
          '  , addrfield=true\n' +
          '  , backaddress=true\n' +
          '  , numericaldate=false\n' +
          '  , foldmarks=false\n' +
          '  , fromemail=false\n' +
          '  , fromalign=left\n' +
          '  %, fromlogo=true\n' +
          '}\n' +
          '\n' +
          '\\renewcommand*{\\raggedsignature}{\\raggedright}\n' +
          '\n' +
          '\n' +
          '% |-- Script input\n' +
          '% v\n' +
          '\n';


          // '\\newcommand{\\dieAdresse}{' + 
          //     $scope.absender.vname + ' ' + 
          //     $scope.absender.nname + '\\\\' + 
          //     $scope.absender.street + ' ' + 
          //     $scope.absender.nr + '\\\\' + 
          //     $scope.absender.postnr + ' ' + 
          //     $scope.absender.city + '}\n' +
          // '\\newcommand{\\dieAnrede}{\\Anrede{Herr}{Wurst}}\n' +
          // '\\newcommand{\\derBetreff}{Beschwerde}\n' +
          // '\\setkomavar{fromname}\n' +
          // '  {\\Large{\\textsc{Kurt Deuter}}}\n' +
          // '\\setkomavar{fromaddress}\n' +
          // '  {Diestraße 31\\\\\n' +
          // '   72070 Tübingen}\n' +
          // '\\setkomavar{backaddress}\n' +
          // '  {K.Deuter, Diestraße 31, 72070 Tübingen}\n' +
          // '\\setkomavar{subject}\n' +
          // '  {\\derBetreff}\n' +
          // '\\setkomavar{fromemail}{deuter@kurt.de}\n' +

      $scope.body =
          '\n' +
          '% ^\n' +
          '% |-- Script input\n' +
          '\n' +
          '% \\setkomavar*{enclseparator}{Anlagen}\n' +
          '% \\setkomavar*{enclseparator}{Anlage}\n' +
          '% \\setkomavar{signature}{\\pic[.09]{Unterschrift-MatthiasBrettschneider}\\\\Matthias Brettschneider}\n' +
          '% \\setkomavar{location}{\\pic[.08]{FotoSW2014-02-11.jpg}}\n' +
          '% \\setkomavar{fromphone}{}\n' +
          '% \\setkomavar{fromlogo}{\\pic[.2]{ }}\n' +
          '% \\setkomavar{specialmail}{Persoenlich/Vertraulich}\n' +
          '\n' +
          '\n' +
          '\\begin{document}\n' +
          '\n' +
          '% |-- Script input\n' +
          '% v\n';


          // '\\begin{letter}{\\dieAdresse}\n' +
          // '\\opening{\\dieAnrede}\n' +
          // '\n' +
          // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis ac nulla id ultricies. Ut faucibus malesuada magna, eget\n' +
          // 'dictum mi volutpat nec. Aenean convallis, mi porta vestibulum venenatis, risus nisl fringilla erat, vel placerat quam erat sit\n' +
          // 'amet quam.\n' +
          // '\n' +
          // 'Praesent diam ligula, dapibus in nisl ac, suscipit varius velit. Nam libero libero, placerat ac sapien ut, pellentesque\n' +
          // 'laoreet mi. Mauris pellentesque volutpat mi sed luctus. Phasellus lacinia, nisl at luctus pretium, nunc mi commodo lacus, et\n' +
          // 'consequat turpis tortor vel augue.\n' +
          // '\n' +
          // 'Curabitur blandit risus ut risus lobortis, eu interdum dolor aliquet. Vestibulum mattis augue\n' +
          // 'vitae posuere lacinia. Vestibulum mauris justo, tempor sed diam et, molestie sagittis orci.\n' +
          // '\n' +
          // '\\closing{Mit freundlichen Grüßen}\n' +

      $scope.footer =
          '% ^\n' +
          '% |-- Script input\n' +
          '\n' +
          '\\end{letter}\n' +
          '\\end{document}          \n' +
          '\n';


      // $Scope.onSuccess = function (response) {
      //     console.log('hello');
      //     console.log(response.data);
      // };

      // $http({
      //     method: 'POST',
      //     url: 'http://localhost:8080/upload'
      //     }).then(console.log('yes'));
          

      // $scope.upl = function ($scope) {
      //     $http({
      //         url: 'http://localhost:8080/upload',
      //         method: 'POST',
      //         data: $scope.absender,
      //         headers: {'Content-Type': 'application/x-www-form-urlencoded'}
      //     }).success(
      //         console.log('yes men')
      //     ).error(console.log('no no no'));
      // };

      // $scope.doUpload = function () {
      //     console.log('vorPost');

      //     upload({
      //         url: 'http://localhost:8080/upload',
      //         method: 'POST',
      //         data: {
      //             absender: $scope.absender,
      //             empfaenger: $scope.empfaenger
      //         }
      //     }).then(
      //         function (response) {
      //             console.log(response.data); // will output whatever you choose to return from the server on a successful upload
      //         },
      //         function (response) {
      //             console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
      //         }
      //     );
      //     console.log('nachPost');
      // };

      //     $scope.doUpload = function () {
      //         upload({
      //             url: 'http://localhost:8080/upload',
      //             data: $scope.absender
      // // {
      // //                 // anint: 123,
      // //                 // aBlob: Blob([1,2,3]), // Only works in newer browsers
      // //                 // aFile: $scope.myFile // a jqLite type="file" element, upload() will extract all the files from the input and put them into the FormData object before sending.
      // //             }
      //         }).then(
      //             function (response) {
      //                 console.log(response.data); // will output whatever you choose to return from the server on a successful upload
      //             },
      //             function (response) {
      //                 console.error(response); //  Will return if status code is above 200 and lower than 300, same as $http
      //             }
      //         );
      //     };
    });
