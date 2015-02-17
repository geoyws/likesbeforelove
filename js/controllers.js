var lblControllers = angular.module('lblControllers', [])
.controller('splashscreenCtrl', ['$scope', '$window', '$location', '$timeout', 'Standard',
  function ($scope, $window, $location, $timeout, Standard) {
    $timeout(function () {
      $location.path('/home');	  
    }, 1000);
  }
])
.controller('homeCtrl', ['$scope', '$window', '$location', 'Standard', 'Likes', 'Posts',
  function ($scope, $window, $location, Standard, Likes, Posts) {
    var finalistLikesArray = [];
    for (var i = 0; i < $window.finalistUrls; i++) {
      Likes.get({ finalistUrl: $window.finalistUrls[i] });
    }
  }
]);
