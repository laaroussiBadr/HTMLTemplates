var appDetailsController = app.controller('appDetailsController', function($scope, SharedData) {

	$scope.app = SharedData.getAppDetails();

});