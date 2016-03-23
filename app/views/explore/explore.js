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
}]);