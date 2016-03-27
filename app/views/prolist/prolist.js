'use strict';

angular.module('myApp.prolist', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prolist', {
    templateUrl: 'views/prolist/prolist.html',
    controller: 'ProlistCtrl'
  });
  $routeProvider.when('/prolist_en', {
    templateUrl: 'views/prolist/prolist_en.html',
    controller: 'ProlistCtrl'
   });
}])

.controller('ProlistCtrl', ['$rootScope','$scope', '$location',function($rootScope, $scope,$location) {
   $rootScope.closeNav();
   $(".nav-list ul>li").removeClass("cur");
   $(".nav-list ul>li").eq(1).addClass("cur");
   $(".scroll-wrap").scroll(function(){
        if($(this).scrollTop() == 0){
            $(".nav-bg").removeClass('fadeInDown')
            return false
        }
        $(".nav-bg").addClass('fadeInDown')
   });
   $('.search-open li').live('click',function(){
      $(this).toggleClass('cur');
   });

   $('.show-all').click(function(){
       $('.search-open li').addClass('cur');
   });
   $(".search-close").click(function(){
      $(".search-area").toggleClass("open");
   });
   Array.prototype.remove = function(from ,to){
        var rest = this.slice((to || from) + 1 ||this.length);
        this.length = from < 0 ? this.length + from : from;
        return this.push.apply(this,rest);
   };
   $scope.seachresult = [];
   $scope.listpro = {};
   $scope.section = $location.search().section;
   switch($location.search().section){
       case "baojinpin" :
           $scope.listpro = $rootScope.prodata;
           break;
       default:
           $scope.listpro = $rootScope.prodata;
   }


   $scope.searchall = function(){
       $scope.seachresult=[];
       for(var i =0;i<$rootScope.categories.length;i++){
           $scope.seachresult.push($rootScope.categories[i]);
       }
       $scope.listpro = $rootScope.prodata;
   }

   $scope.search = function(categroy){
       $scope.listpro = {};
       $scope.seachresult.indexOf(categroy) < 0 ?
           $scope.seachresult.push(categroy) : $scope.seachresult.remove($scope.seachresult.indexOf(categroy));

        console.log($scope.seachresult)   
       if ($scope.seachresult.length == 0){
           $scope.searchall();
           $scope.seachresult = [];
           return false
       } 
       
       for(var i=0;i<$scope.seachresult.length;i++){
           $scope.listpro[$scope.seachresult[i]] = $rootScope.prodata[$scope.seachresult[i]];
       }
   }
}]);