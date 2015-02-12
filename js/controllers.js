var lblControllers = angular.module('lblControllers', [])
.controller('splashscreenCtrl', ['$scope', '$window', '$location', '$timeout', 'Standard',
  function ($scope, $window, $location, $timeout, Standard) {
    $timeout(function () {
      $location.path('/home');	  
    }, 1000);
  }
])
.controller('homeCtrl', ['$scope', '$window', '$location', 'Standard',
  function ($scope, $window, $location, Standard) {
    $window.facebookLogin();
  }
]);
