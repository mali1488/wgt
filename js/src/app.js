'use strict';

angular.module('wgt',['ngRoute','ngResource','ngMaterial','uiGmapgoogle-maps','ngMessages']) 

.config(['$routeProvider','$mdThemingProvider', 'uiGmapGoogleMapApiProvider', 
  function($routeProvider,$mdThemingProvider,GoogleMapApiProviders) { 


  $mdThemingProvider.theme('default')
    .primaryPalette('blue-grey')
    .accentPalette('indigo')
    .backgroundPalette('blue-grey')
    .warnPalette('blue-grey')
    .dark();


	$routeProvider.when('/wgt', {
      // About tab
		  templateUrl : 'views/information/about/index.html',
  		controller: 'aboutCtrl'
  	}).
    when('/news', {
      templateUrl : 'views/information/news/index.html',
      controller: 'newsCtrl'
    }).
    when('/contact', {
      templateUrl : 'views/information/contact/index.html',
      controller: 'contactCtrl'
    }).
  	
    // Program tab
    when('/bands', {
		  templateUrl : 'views/program/bands/index.html',
  		controller: 'bandCtrl'
  	}).
    when('/parties', {
      templateUrl : 'views/program/parties/index.html',
      controller: 'partiesCtrl'
    }).
    when('/theatherVariety', {
      templateUrl : 'views/program/theatherVariety/index.html',
      controller: 'theVarCtrl'
    }).
    when('/movies', {
      templateUrl : 'views/program/movies/index.html',
      controller: 'moviesCtrl'
    }).
    when('/readingLectures', {
      templateUrl : 'views/program/readingLectures/index.html',
      controller: 'readingLecturesCtrl'
    }).
    when('/museumsExhibitions', {
      templateUrl : 'views/program/museumsExhibitions/index.html',
      controller: 'musExibCtrl'
    }). 
    when('/various', {
      templateUrl : 'views/program/various/index.html',
      controller: 'variousCtrl'
    }).

    // past
    when('/photos', {
      templateUrl : 'views/past/photos/index.html',
      controller: 'photosCtrl'
    }).
    when('/pastbands', {
      templateUrl : 'views/past/pastbands/index.html',
      controller: 'pastBandsCtrl'
    }).




  	otherwise({
    	redirectTo: '/wgt'
  	});
}]);
