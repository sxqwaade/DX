'use strict';

angular.module('myApp.where', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/where', {
        templateUrl: 'views/where/where.html',
        controller: 'WhereCtrl'
    });
}])

.controller('WhereCtrl', ['$rootScope',function($rootScope) {
    $rootScope.closeNav();
    $(".nav-list ul>li").removeClass("cur");
    $(".nav-list ul>li").eq(2).addClass("cur");
}]);


angular.module('myApp.where_shop', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/where_shop', {
        templateUrl: 'views/where/shop.html',
        controller: 'WhereShopCtrl'
    });
}])

.controller('WhereShopCtrl', ['$rootScope','$scope',function($rootScope,$scope) {
    $rootScope.closeNav();
    $scope.shopSlide= [0,1];
    $(".nav-list ul>li").removeClass("cur");
    $(".nav-list ul>li").eq(2).addClass("cur");
}]);
