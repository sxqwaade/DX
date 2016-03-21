'use strict';

angular.module('myApp.prodetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prodetail', {
    templateUrl: 'views/prodetail/prodetail.html',
    controller: 'ProdetailCtrl'
  });
}])

.controller('ProdetailCtrl', [function() {

}]);