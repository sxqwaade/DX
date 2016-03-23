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
}]);