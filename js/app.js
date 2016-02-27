'use strict';

angular.module('wgt',['ngRoute','ngResource','ngMaterial']) 

.config(['$routeProvider','$mdThemingProvider', function($routeProvider,$mdThemingProvider) { 

  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('orange')
    .dark();

	$routeProvider.when('/wgt', {
		templateUrl : 'views/about/index.html',
  		controller: 'mainCtrl'
  	}).
//  	when('/music', {
//		templateUrl : 'views/music/index.html',
//  		controller: 'MusicCtrl'
//  	}).
  	
  	otherwise({
    	redirectTo: '/wgt'
  	});
}]);
