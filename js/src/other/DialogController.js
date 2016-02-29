angular.module('wgt')

.controller('AppCtrl', function($scope, $mdDialog, $mdMedia) {
  $scope.status = '  ';

  $scope.map = { center: { latitude: 51, longitude: -12 }, zoom: 8  };

  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');


  $scope.showAdvanced = function(ev) {
    var useFullScreen = ($mdMedia('sm') || $mdMedia('xs'))  && $scope.customFullscreen;
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/maps.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: useFullScreen
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
    $scope.$watch(function() {
      return $mdMedia('xs') || $mdMedia('sm');
    }, function(wantsFullScreen) {
      $scope.customFullscreen = (wantsFullScreen === true);
    });
  };

});


function DialogController($scope, $mdDialog) {
  $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}