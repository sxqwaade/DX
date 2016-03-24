'use strict';

angular.module('myApp.prolist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prolist', {
    templateUrl: 'views/prolist/prolist.html',
    controller: 'ProlistCtrl'
  });
}])

.controller('ProlistCtrl', ['$rootScope',function($rootScope) {
   $rootScope.closeNav();
   $(".nav-list ul>li").removeClass("cur");
   $(".nav-list ul>li").eq(1).addClass("cur");
}]);