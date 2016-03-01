
var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.when('/Users', {
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
})