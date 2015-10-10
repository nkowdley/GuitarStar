'use strict';
angular.module('guitarStarApp')
.controller('MainController',function($scope,$http,$timeout){
  var self = this;
  $scope.User = {};

  $scope.createUser = function(){
    $http.post('/startSong', $scope.User)
            .then(function(data) {
                $scope.info = data;
                console.log(data);
            });
  }

  $scope.getTabs = function(){
    var requestUrl = '/getTabs?songName=' + $scope.User.songName;
    $http.get(requestUrl)
    .then(function(response){
      $scope.tabs = response.data["tabs"];
      showDrum();
    });
  }

  function showDrum (){
    $scope.counter = 0;
    $scope.onTimeout = function(){
      $scope.value = $scope.tabs[$scope.counter];
      console.log($scope.value);
      $scope.counter++;
        if ($scope.counter < $scope.tabs.length) {
            mytimeout = $timeout($scope.onTimeout,1000);
        }
    }
    var mytimeout = $timeout($scope.onTimeout,1000);
  }
});