'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/home_en', {
        templateUrl: 'views/home/home_en.html',
        controller: 'HomeCtrl'
    });
    $routeProvider.when('/contact_us', {
        templateUrl: 'views/home/contact-us.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', ['$rootScope','$location',function($rootScope,$location) {
    $rootScope.closeNav();

    if($location.url().indexOf("contact_us") > 0){
        $(".nav-list ul>li").removeClass("cur");
        $(".nav-list ul>li").eq(4).addClass("cur");
    }else{
        $(".nav-list ul>li").removeClass("cur");
    }
}]);