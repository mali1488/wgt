angular.module('wgt')

.controller('bandCtrl',['$scope' , '$rootScope' ,function($scope,$rootScope) {
	$scope.message = "Hello world from band!"

	$scope.bands = [
		{band: "Das ich", hist: "hello", bandUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Dasich.jpg/220px-Dasich.jpg"}, 
		{band: "Inspector Norse", hist: "hello", bandUrl: "https://static-secure.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/2/1396458729256/Todd-Terje-011.jpg"},
		{band: "Kauna", hist: "hello", bandUrl: "http://www.metal-archives.com/images/6/7/5/7/67576_photo.jpg"},
		{band: "Sisters of mercy", hist: "hello", bandUrl: "http://assets.fanart.tv/fanart/music/553d8166-27b0-49fe-b8e4-89a984e2c375/artistbackground/the-sisters-of-mercy-4e6364a57cccb.jpg"},
		{band: "Cannibal corpse", hist: "hello", bandUrl: "http://metalz.info/wp-content/uploads/2012/03/cannibalcorpse.jpg"},
		{band: "XTR Human", hist: "hello", bandUrl: "http://www.xtrhuman.de/wp-content/uploads/2014/10/XTR_HUMAN_Promo_1_klein-1024x682_s_w.jpg"},
		{band: "Hante.", hist: "hello", bandUrl: "https://f1.bcbits.com/img/a0858424789_10.jpg"},
		{band: "Darkher", hist: "hello", bandUrl: "http://www.manchestersfinest.com/wp-content/uploads/2013/10/darkher-shoot-2.jpg"}]
}]);