'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'angular-loading-bar',
  'ngRoute',
  'angular-carousel',
  'myApp.home',
  'myApp.brand',
  'myApp.explore',
  'myApp.prodetail',
  'myApp.prolist',
  'myApp.prodetail',
  'myApp.where',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]).
run(function($rootScope,cfpLoadingBar){
  $rootScope.start = function(){
    cfpLoadingBar.start();
  }
  //打开导航浮层
  $rootScope.showNav = function(){
    $('.nav-content').addClass('show');
    $('.nav-list').addClass("fadeInRightBig");
  };
  //关闭导航浮层
  $rootScope.closeNav=function(){
    $('.nav-content').removeClass('show');
    $('.nav-list').removeClass("fadeInRightBig");
  }
  $(".nav-content").on('click',function(e){
    $(e.target).hasClass('nav-content') &&  $rootScope.closeNav();
  })
});
