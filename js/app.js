var lbl = angular.module('likesbeforelove', [
  'ngAnimate',
  'ngRoute',
  'ngMaterial',
  'ngTouch',
  'ngResource',
  'lblAnimations',
  'lblControllers',
  'lblFilters',
  'lblServices'
])
.config([
  '$routeProvider',
  '$mdThemingProvider',
  function ($routeProvider, $mdThemingProvider) {
    $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('light-blue');
    $routeProvider
    .when('/', {
      templateUrl: 'partials/splashscreen.html',
      controller: 'splashscreenCtrl'
    })
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'homeCtrl'
    })
    .otherwise({
      redirectTo: '/splashscreen'
    });
  }
]);
