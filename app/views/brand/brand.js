'use strict';

angular.module('myApp.brand', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/brand', {
        templateUrl: 'views/brand/brand.html',
        controller: 'BrandCtrl'
    });
    $routeProvider.when('/brand_en', {
        templateUrl: 'views/brand/brand_en.html',
        controller: 'BrandCtrl'
    });
}])

.controller('BrandCtrl', ['$rootScope','$scope','$location', function($rootScope,$scope,$location) {
        $rootScope.closeNav();

        $scope.slides = $(".custom-indicator").attr("data-slides").split(',');
        $scope.$parent.carouselIndex = Math.round($location.search().index);
        $(".nav-list ul>li").removeClass("cur");
        $(".nav-list ul>li").eq(0).addClass("cur");

        $(".scroll-wrap").scroll(function(){
            if($(this).scrollTop() == 0){
                $(".nav-bg").removeClass('fadeInDown')
                return false
            }
            $(".nav-bg").addClass('fadeInDown')
        });
}]);