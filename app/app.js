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

  //鎵撳紑瀵艰埅娴眰
  $rootScope.showNav = function(){
    $('.nav-content').removeClass('fadeOut');
    $('.nav-content').addClass('show');
    $('.nav-list').removeClass("fadeOutRightBig");
    $('.nav-list').addClass("fadeInRightBig");
  };
  //鍏抽棴瀵艰埅娴眰
  $rootScope.closeNav=function(){
    $('.nav-list').addClass('fadeOutRightBig');
    $('.nav-content').addClass('fadeOut');
    setTimeout(function(){$('.nav-content').removeClass('show')},300);
  }
  $(".nav-content").on('click',function(e){
    $(e.target).hasClass('nav-content') &&  $rootScope.closeNav();
  })
});
