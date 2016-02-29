angular.module('wgt')

.controller('photosCtrl',['$scope' , '$rootScope' , function($scope,$rootScope) {
	$scope.message = "Hello world from photos!";
	$scope.tiles = [];
	$scope.imagess = []
	$scope.years = [2014,2015]

	for (var i = 0; i < 9; i = i + 1) {
		$scope.imagess.push(new Image());
		$scope.imagess[i].src = "img/photos/" + 2014 + "/" + (i) + ".jpg";
	}

	$scope.fetchPictures = function(year) {
		$scope.imagess = []
		// Length of this loop will be calculated by JSON response payload length!!!
		for (var i = 0; i < 9; i = i + 1) {
			//$scope.imagess.push(new Image());
			$scope.imagess[i] = "img/photos/" + year + "/" + (i) + ".jpg";
			console.log($scope.imagess)
		}
	};

        
	$scope.resizeImg = function(arg) {
		console.log(111)
		console.log(arg)
	};
}]);