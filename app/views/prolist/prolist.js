'use strict';

angular.module('myApp.prolist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prolist', {
    templateUrl: 'views/prolist/prolist.html',
    controller: 'ProlistCtrl'
  });
}])

.controller('ProlistCtrl', ['$rootScope',function($rootScope) {
   $rootScope.closeNav();
   $(".nav-list ul>li").removeClass("cur");
   $(".nav-list ul>li").eq(1).addClass("cur");
   $(".scroll-wrap").scroll(function(){
        console.log($(this).scrollTop())
        if($(this).scrollTop() == 0){
            $(".nav-bg").removeClass('fadeInDown')
            return false
        }
        $(".nav-bg").addClass('fadeInDown')
   });
   $('.search-open li').click(function(){
      $(this).toggleClass('cur');
   });
   $('.show-all').click(function(){
       $('.search-open li').addClass('cur');
   });
   $(".search-close").click(function(){
      $(".search-area").toggleClass("open");
   });
}]);