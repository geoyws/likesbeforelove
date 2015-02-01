'use strict';

var lblServices = angular.module('lblServices', ['ngResource'])
.factory('Home', ['$resource',
  function($resource) {
    var Home = {}; // just return this object later
    Home.prototype.getLikes = function(finalistUrl) {
      return $resource(FB_API + finalistUrl + '/insights/page_fans') ; // number of page fans for a lifetime
    };
    Home.prototype.getRecentPosts = function(finalistUrl) {
      return $resource(FB_API + finalistUrl + '/feed');
    };   
    return Home;
  }
]);
