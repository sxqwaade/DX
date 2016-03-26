'use strict';

angular.module('myApp.prodetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/prodetail', {
    templateUrl: 'views/prodetail/prodetail.html',
    controller: 'ProdetailCtrl'
  });
}])

.controller('ProdetailCtrl', ["$rootScope","$scope", function($rootScope,$scope) {
      $rootScope.closeNav();
      $(".nav-list ul>li").removeClass("cur");
      $(".nav-list ul>li").eq(1).addClass("cur");

        var tagId = "swip";
        var pressX = 0, pressY = 0;
        var obj = document.getElementById(tagId);
        $('#swip').on('touchmove', function(event) {
            // 如果这个元素的位置内只有一个手指的话
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                var spanX = touch.pageX - pressX;
                var spanY = touch.pageY - pressY;
                var direct = "none";
                if (Math.abs(spanX) > Math.abs(spanY)) {
                    //水平方向
                    if (spanX > 0) {
                        direct = "right";//向右
                        //do right function
                    } else {
                        direct = "left";//向左
                        //do left function
                    }
                } else {
                    //垂直方向
                    if (spanY > 0) {
                        direct = "down";//向下
                        //do down function
                    } else {
                        direct = "up";//向上
                        //do up function
                    }
                }

                // 把元素放在手指所在的位置
                if(direct == 'up'){
                    $("#swip").attr("data-page") == 1 && $("#swip").attr("data-page",'2')
                    return false
                }
                if (direct == 'down'){
                    $("#swip").attr("data-page") == 2 && $("#swip").attr("data-page",'1')
                    return false
                }
            }
        }, false);

        $('#swip').on('touchstart', function(event) {
            // 如果这个元素的位置内只有一个手指的话
            if (event.targetTouches.length == 1) {
                var touch = event.targetTouches[0];
                // 把元素放在手指所在的位置
                pressX = touch.pageX;
                pressY = touch.pageY;

                touchStart.value = pressX + ';' + pressY;
            }
        }, false);
}]);