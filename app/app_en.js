'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'angular-loading-bar',
    'ngRoute',
    'angular-carousel',
    'myApp.home',
    'myApp.brand',
    'myApp.explore',
    'myApp.explore_detail',
    'myApp.prodetail',
    'myApp.prolist',
    'myApp.prodetail',
    'myApp.where',
    'myApp.where_shop',
    'myApp.version'
]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/home_en'});
    }]).
    run(function($rootScope,cfpLoadingBar,$http) {
        $rootScope.start = function () {
            cfpLoadingBar.start();
        }

        //鎵撳紑瀵艰埅娴眰
        $rootScope.showNav = function () {
            $('.nav-content').removeClass('fadeOut');
            $('.nav-content').addClass('show');
            $('.nav-list').removeClass("fadeOutRightBig");
            $('.nav-list').addClass("fadeInRightBig");
        };
        //鍏抽棴瀵艰埅娴眰
        $rootScope.closeNav = function () {
            $('.nav-list').addClass('fadeOutRightBig');
            $('.nav-content').addClass('fadeOut');
            setTimeout(function () {
                $('.nav-content').removeClass('show')
            }, 300);
        };
        $(".nav-content").on('click', function (e) {
            $(e.target).hasClass('nav-content') && $rootScope.closeNav();
        });
        $("#brand_toggle").click(function () {
            $(".sub-nav").toggleClass('slideDown');
            $(".brand-expand").toggleClass('expand');
            $(this).parent().toggleClass('cur');
        });
        $rootScope.$on('$routeChangeStart', function (evt, next, current) {
            $(".nav-bg").removeClass("fadeInDown");
            $(".brand-expand").removeClass('expand');
            $(".sub-nav").removeClass('slideDown');
            $("#brand_toggle").removeClass('cur');
        });
        $rootScope.proloaded = false;
        $rootScope.proloading = true;
        $http.get('public/json/prodata_en.json').then(function(res){
            $rootScope.proloaded = true;
            $rootScope.proloading = false;
            $rootScope.prodata = res.data;
            $rootScope.categories=[];
            for(var i in res.data){
                $rootScope.categories.push(i);
            }
        });
    });
