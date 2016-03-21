/** 
 * @Description: DX 
 * @author: songxiaoqiang 
 * @Update: 2016-03-21 17:03 
 */ 

'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home/home.html',
        controller: 'HomeCtrl'
    });
}])

.controller('HomeCtrl', [function() {

}]);
'use strict';

angular.module('myApp.brand', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/brand', {
        templateUrl: 'views/brand/brand.html',
        controller: 'BrandCtrl'
    });
}])

.controller('BrandCtrl', [function() {

}]);
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
'use strict';

angular.module('myApp.where', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/where', {
        templateUrl: 'views/where/where.html',
        controller: 'WhereCtrl'
    });
}])

.controller('WhereCtrl', [function() {

}]);
'use strict';

angular.module('myApp.explore', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/explore', {
        templateUrl: 'views/explore/explore.html',
        controller: 'ExploreCtrl'
    });
}])

.controller('ExploreCtrl', [function() {

}]);