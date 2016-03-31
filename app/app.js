var app = angular.module('AngularScaffold', ['ui.router', 'ngStorage', 'AngularScaffold.Services', 'AngularScaffold.Controllers']);

angular.module('AngularScaffold.Controllers', []);
angular.module('AngularScaffold.Services', []);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('home');
	$stateProvider
        .state('adminpage', {
            url: '/admin',
            templateUrl: '/views/adminpage.html',
            controller: 'adminController'
        })
				.state('joblist', {
            url: '/joblist',
            templateUrl: '/views/joblist.html',
            controller: 'joblistController'
        })
				.state('registerpage', {
            url: '/registrar',
            templateUrl: '/views/registerpage.html',
            controller: 'registerController'
        })
				.state('home', {
            url: '/home',
            templateUrl: '/views/home.html',
            controller: 'HomeController'
        });
}])
