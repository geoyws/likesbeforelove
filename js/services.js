'use strict';

var lblServices = angular.module('lblServices', ['ngResource'])
.factory('Home', ['$resource',
  function($resource) {
    return $resource(FB_API);
  }
]);
