
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider.
  				when('/', {
				templateUrl : 'partials/index.html'
				})
				.
  				when('/Users', {
				templateUrl : 'partials/users.html',
				controller  : 'UserController'
				})
  				.when('/AddUser', {
				templateUrl : 'partials/addUser.html',
				controller  : 'UserController'
				})
				.when('/Apps', {
				templateUrl : 'partials/applications.html',
				controller  : 'AppController'
				})
				.when('/AppDetails', {
				templateUrl : 'partials/appdetails.html',
				controller  : 'appDetailsController'
				})
				.when('/Sessions', {
				templateUrl : 'partials/sessions.html',
				controller  : 'SessionController'
				})
				.when('/customer', {
				templateUrl : 'partials/Customers.html',
				controller  : 'CustomerController'
				});
  	$locationProvider.html5Mode(true);
})