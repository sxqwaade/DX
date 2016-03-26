'use strict';

angular.module('myApp.explore', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/explore', {
        templateUrl: 'views/explore/explore.html',
        controller: 'ExploreCtrl'
    });
}])

.controller('ExploreCtrl', ['$rootScope',function($rootScope) {
    $rootScope.closeNav();
    $(".nav-list ul>li").removeClass("cur");
    $(".nav-list ul>li").eq(3).addClass("cur");
    $(".scroll-wrap").scroll(function(){
        console.log($(this).scrollTop())
        if($(this).scrollTop() == 0){
            $(".nav-bg").removeClass('fadeInDown')
            return false
        }
        $(".nav-bg").addClass('fadeInDown')
    });
}]);

angular.module('myApp.explore_detail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/explore_detail', {
        templateUrl: 'views/explore/detail.html',
        controller: 'ExploreDetailCtrl'
    });
}])

.controller('ExploreDetailCtrl', ['$rootScope','$scope', '$location', function($rootScope,$scope,$location) {
    $rootScope.closeNav();
    $scope.carouselIndex = Math.round($location.search().index);
    $scope.exploreSlide= $(".carouselExplore").attr("data-slides").split(",");
    $(".nav-list ul>li").removeClass("cur");
    $(".nav-list ul>li").eq(3).addClass("cur");
}]);