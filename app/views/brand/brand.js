'use strict';

angular.module('myApp.brand', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/brand', {
        templateUrl: 'views/brand/brand.html',
        controller: 'BrandCtrl'
    });
}])

.controller('BrandCtrl', ['$rootScope',function($rootScope) {
        $rootScope.closeNav();
        $(".switch li").on('click',function(){
            var index= $(this).index();
            $(".switch li").removeClass('cur');
            $(this).attr('class','cur');
            $('.switch-content p').removeClass('flipInX');
            $('.switch-content p').eq(index).addClass('flipInX');
        });
}]);