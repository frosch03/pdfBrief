'use strict';

angular.module('angularApp')
  .controller('BriefCtrl', ['$scope', '$http', '$resource', 'storage', function ($scope, $http, $resource, storage) {
      storage.bind($scope, 'meta', {
          defaultValue: {
              abs:  {vname: '',nname: '',street: '',nr: '',postnr: '',city: ''},
              empf: {vname: '',nname: '',street: '',nr: '',postnr: '',city: ''},
              txt:     '',
              subject: '',
              date:    '',
              opening: 'Sehr geehrte Frau',
              closing: 'Mit freundlichen Grüßen'
         }
      });
      
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

      $scope.footer =
          '% ^\n' +
          '% |-- Script input\n' +
          '\n' +
          '\\end{letter}\n' +
          '\\end{document}          \n' +
          '\n';
      


      $scope.test = function () {
          var theText =
              $scope.header +
              '' +
              '\\newcommand{\\dieAdresse}{ ' + $scope.meta.empf.vname + ' ' + $scope.meta.empf.nname + '\\\\' + $scope.meta.empf.street + ' ' + $scope.meta.empf.nr + '\\\\' + $scope.meta.empf.postnr + ' ' + $scope.meta.empf.city + ' }' +
              '\\newcommand{\\dieAnrede}{\\Anrede{Herr}{ ' + $scope.meta.empf.nname + ' } }' +
              '\\newcommand{\\derBetreff}{ ' + $scope.meta.subject + ' }' +
              '\\setkomavar{fromname}    ' +
              '{\\Large{\\textsc{ ' + $scope.meta.abs.vname + ' ' + $scope.meta.abs.nname + ' } } }' +
              '\\setkomavar{fromaddress} ' +
              '{ ' + $scope.meta.abs.street + ' ' + $scope.meta.abs.nr + '\\\\' + $scope.meta.abs.postnr + ' ' + $scope.meta.abs.city + ' } ' +
              '\\setkomavar{backaddress} ' +
              '{ ' + $scope.meta.abs.vname[0] + '. ' + $scope.meta.abs.nname + ', ' + $scope.meta.abs.street + ' ' + $scope.meta.abs.nr + ', ' + $scope.meta.abs.postnr + ' ' + $scope.meta.abs.city + ' }' +
              '\\setkomavar{subject}' +
              '{ ' + $scope.meta.subject + ' }' +
              '\\setkomavar{fromemail}' +
              '{ kurt-deuter.blub.de }' +
              '' +
              $scope.body + 
              '' +
              '\\begin{letter}{ ' + $scope.meta.empf.vname + ' ' + $scope.meta.empf.nname + '\\\\' + $scope.meta.empf.street + ' ' + $scope.meta.empf.nr + '\\\\' + $scope.meta.empf.postnr + ' ' + $scope.meta.empf.city + ' }' +
              '\\opening{ ' + $scope.meta.opening + ' ' + $scope.meta.empf.nname + ', }' +
              '' +
              '' + $scope.meta.txt + '' +
              '' +
              '\\closing{ ' + $scope.meta.closing + ',\\\\' + $scope.meta.abs.vname + ' ' + $scope.meta.abs.nname + ' }' +
              '' +
              $scope.footer;

          var xsrf = encodeURIComponent(JSON.stringify({ latex: theText, subject: $scope.meta.subject, nachname: $scope.meta.abs.nname }));

          $http({
              method: 'POST',
              url: 'http://192.168.0.17:8080/upload', 
              data: 'message=' + xsrf,
              headers: {'Content-Type': 'multipart/form-data'}
          })
          .success(function(data, status, headers, config) {
              window.open(data.url); 
              console.log('opening .pdf');
          })
          .error(function (data, status, headers, config) {
              console.log('didn\'t got the .pdf from the server');
          });

          console.log('done');
      };


    }]);
