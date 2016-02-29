angular.module('wgt')

.controller('contactCtrl',['$scope' , '$rootScope', 
	function($scope,$rootScope,GoogleMapApiProviders) {
	
	$scope.status = '  ';
	$scope.title = 
	$scope.marker = {id:0, 	
					 coords: { latitude: 51.236668, longitude: 12.725728 },
					 options: {labelVisible:true} ,
					 events: true,
					 show: false};

	$scope.map = { center: { latitude: 51.236668, longitude: 12.725728 }, zoom: 15 };

	$scope.imagePath = "img/banners/wgtbanner2.png";

	$scope.phones = [{number: "+49 (0) 341 212 0862", type: "Company"},
					 {number: "+49 (0) 371 560 460" , type: "Company"} ];

	$scope.emails = ["info@wave-gotik-treffen.de"]

	$scope.address = [{company: "Treffen & Festspielgesellschaft für Mitteldeutschland mbH",
					  road: "Schulstraße 63",
					  postal: "09125 Chemnitz",
					  country: "Germany"}];
	
	$scope.windowOptions = {
        visible: false
    };

    $scope.onClick = function() {
	   $scope.windowOptions.visible = !$scope.windowOptions.visible;
    };

    $scope.closeClick = function() {
        $scope.windowOptions.visible = false;
    };

}]);



