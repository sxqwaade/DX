'use strict';

angular.module('myApp.prolist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prolist', {
    templateUrl: 'views/prolist/prolist.html',
    controller: 'ProlistCtrl'
  });
}])

.controller('ProlistCtrl', [function() {

}]);