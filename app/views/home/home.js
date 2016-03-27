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
}])

.controller('HomeCtrl', [function() {
    $(".nav-list ul>li").removeClass("cur");
}]);