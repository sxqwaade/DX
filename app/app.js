'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.brand',
  'myApp.explore',
  'myApp.prodetail',
  'myApp.prolist',
  'myApp.prodetail',
  'myApp.where',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
