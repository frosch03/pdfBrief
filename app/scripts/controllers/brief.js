'use strict';

angular.module('angularApp')
  .controller('BriefCtrl', ['$scope', 'storage', function ($scope, storage) {
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
      
      // $scope.absender = {
      //   vname: 'a',
      //   nname: 'b',
      //   street: 'c',
      //   nr: 'd',
      //   postnr: 'e',
      //   city: 'f'
      // };

      // $scope.empfaenger = {
      //   vname:  '',
      //   nname:  '',
      //   street: '',
      //   nr:     '',
      //   postnr: '',
      //   city:   ''
      // };

      // $scope.meta = {
      //   abs: $scope.absender,
      //   empf: $scope.empfaenger,
      //   txt:     '',
      //   subject: '',
      //   date:    '',
      //   opening: 'Sehr geehrte Dame',
      //   closing: 'Mit freundlichen Grüßen'
      // };

      // $scope.panelColor = function ($scope) {
      //   if ( $scope.metaForm.subject.$invalid ) {
      //     console.log($scope.metaForm.subject);
      //     return 'panel-warning';
      //   } else {
      //     console.log('fuck');
      //     return 'panel-default';
      //   }
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

    }]);
