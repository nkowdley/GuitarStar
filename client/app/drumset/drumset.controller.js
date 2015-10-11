'use strict';

angular.module('guitarStarApp')
  .controller('DrumsetController', function ($scope,$timeout,ngAudio,sharedProperties,$http) {

	    getTabs();
	    function getTabs(){
		    var requestUrl = '/getTabs?songName=' + sharedProperties.getSongName();
		    $http.get(requestUrl)
		    .then(function(response){
		      $scope.tabs = response.data["tabs"];
		      $scope.spotify = response.data["spotify"];
		      sharedProperties.setTab($scope.tabs);
		      sharedProperties.setSpotify($scope.spotify);
		      console.log($scope.spotify);
		      $scope.sound = ngAudio.load($scope.spotify); // returns NgAudioObject
  			  $scope.sound.play();
		      showDrum();
	    	});
  		}
  
  
  function showDrum (){
	    $scope.counter = 0;
	    var array = sharedProperties.getTab();
	    $scope.isEven = false;
	    $scope.onTimeout = function(){
	    	if($scope.counter%2==0)$scope.isEven = true;
	    	else {
	    		$scope.isEven = false;
	    	}
	      $scope.value = array[$scope.counter];
	      console.log($scope.value);
	      $scope.counter++;
	        if ($scope.counter < array.length) {
	            mytimeout = $timeout($scope.onTimeout,1000);
	        }
	    }
	    var mytimeout = $timeout($scope.onTimeout,1000);
  }
  });
