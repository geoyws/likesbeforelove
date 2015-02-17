var lblServices = angular.module('lblServices', ['ngResource'])
.factory('Standard', ['$window', '$resource',
  function ($window, $resource) {
    return false;
  }
])
.factory('Likes', ['$window', '$resource', 
  function ($resource) {
    return $resource($window.graphApi + '/:finalistUrl/insights/page_fans', { finalistUrl: '@finalistUrl' });
  }
])
.factory('Posts', ['$window', '$resource',
  function ($resource) {
    return $resource($window.graphApi + '/:finalistUrl/feed?filter=app_2305272732&limit=1', { finalistUrl: '@finalistUrl' });
  }
]);
