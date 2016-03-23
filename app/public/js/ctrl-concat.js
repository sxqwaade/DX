/** 
 * @Description: DX 
 * @author: songxiaoqiang 
 * @Update: 2016-03-24 00:03 
 */ 

"use strict";angular.module("myApp.brand",["ngRoute"]).config(["$routeProvider",function(a){a.when("/brand",{templateUrl:"views/brand/brand.html",controller:"BrandCtrl"})}]).controller("BrandCtrl",["$rootScope",function(a){a.closeNav(),$(".switch li").on("click",function(){var a=$(this).index();$(".switch li").removeClass("cur"),$(this).attr("class","cur"),$(".switch-content p").removeClass("flipInX"),$(".switch-content p").eq(a).addClass("flipInX")})}]);
"use strict";angular.module("myApp.explore",["ngRoute"]).config(["$routeProvider",function(a){a.when("/explore",{templateUrl:"views/explore/explore.html",controller:"ExploreCtrl"})}]).controller("ExploreCtrl",["$rootScope",function(a){a.closeNav()}]);
"use strict";angular.module("myApp.home",["ngRoute"]).config(["$routeProvider",function(a){a.when("/home",{templateUrl:"views/home/home.html",controller:"HomeCtrl"})}]).controller("HomeCtrl",[function(){}]);
"use strict";angular.module("myApp.prodetail",["ngRoute"]).config(["$routeProvider",function(a){a.when("/prodetail",{templateUrl:"views/prodetail/prodetail.html",controller:"ProdetailCtrl"})}]).controller("ProdetailCtrl",[function(){}]);
"use strict";angular.module("myApp.prolist",["ngRoute"]).config(["$routeProvider",function(a){a.when("/prolist",{templateUrl:"views/prolist/prolist.html",controller:"ProlistCtrl"})}]).controller("ProlistCtrl",["$rootScope",function(a){a.closeNav()}]);
"use strict";angular.module("myApp.where",["ngRoute"]).config(["$routeProvider",function(a){a.when("/where",{templateUrl:"views/where/where.html",controller:"WhereCtrl"})}]).controller("WhereCtrl",["$rootScope",function(a){a.closeNav()}]);