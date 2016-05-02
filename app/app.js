(function() {
  'use strict';

  angular.module('kpcs', [
    'ngRoute',
    'rzModule',
    'oitozero.ngSweetAlert',
    'angularMoment'
  ]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);
  }]);
})();
