'use strict';

angular.module('myApp.brand', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/brand', {
        templateUrl: 'views/brand/brand.html',
        controller: 'BrandCtrl'
    });
}])

.controller('BrandCtrl', [function() {

}]);