// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider ) {

   $stateProvider

   .state('StarterPage', {
   	url: '/starterPage',
   	templateUrl: 'temp/starterPage.html',
   	controller:'startCtrl'
   })

   .state('Calculator', {
    url: '/calculator',
    templateUrl: 'temp/calculator.html',
    controller: 'CalCtrl'
  });
   $urlRouterProvider.otherwise("/starterPage");

})

.controller('startCtrl', function($scope, $state) {
	$scope.start = function(){
		$state.go('Calculator');
	}
})

.controller('CalCtrl', function($scope, $ionicPopup) {


$scope.previousEntredisOP = false;
$scope.number = "";
$scope.operator = "";
$scope.operation ="0";
$scope.results = "";

$scope.clear = function(){
	$scope.previousEntredisOP = false;
	$scope.number = "";
	$scope.results = "";
	$scope.operator = "";
	$scope.operation ="0";
}

$scope.enterNumber = function(x) {
	
	if ($scope.operation === "0") {

		$scope.operation="";
	   	$scope.number = $scope.number + '' + parseInt(x);
		$scope.results = $scope.results+ '' + parseInt(x);
	    $scope.previousEntredisOP = false;

	}else {

	   	$scope.number = $scope.number + '' + parseInt(x);
		$scope.results = $scope.results+ '' + parseInt(x);
	    $scope.previousEntredisOP = false;
	}
}

$scope.enterOperator = function(op) {

      if ($scope.previousEntredisOP) {

	       var alertPopup = $ionicPopup.alert({"title": "Error", "template":"You can not enter two successive operators!"});

      }else {

           $scope.results = $scope.results+ '' + op;
	       $scope.operation = $scope.operation+ ' ' +$scope.number + ' ' + op;
	       $scope.previousEntredisOP = true;
	       $scope.number="";
      }	
}
$scope.Equal = function(){
	$scope.operation =  $scope.operation+ ' ' + $scope.number;
	$scope.number = eval($scope.operation);
	$scope.operation = $scope.number;
    $scope.previousEntredisOP = false;
}

});
