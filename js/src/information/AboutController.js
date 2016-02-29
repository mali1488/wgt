angular.module('wgt')

.controller('aboutCtrl',['$scope' ,'$rootScope',function($scope,$rootScope) {
	$scope.message = "Hello world!"
	$rootScope.urlPic = generateBackgroundImage() 

	function generateBackgroundImage() {
		var numberOfBackgrounds = 5
		return "img/backgrounds/scBW" + Math.floor((Math.random() * numberOfBackgrounds) + 1) + ".png";
	}
}]);