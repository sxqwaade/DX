'use strict';

angular.module('myApp.brand', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/brand', {
        templateUrl: 'views/brand/brand.html',
        controller: 'BrandCtrl'
    });
}])

.controller('BrandCtrl', ['$rootScope','$scope', function($rootScope,$scope) {
        $rootScope.closeNav();

        $scope.slides = ['品牌来源','品牌承诺','品牌信念'];
        $(".nav-list ul>li").removeClass("cur");
        $(".nav-list ul>li").eq(0).addClass("cur");
}]);