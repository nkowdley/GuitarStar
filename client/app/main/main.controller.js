'use strict';
angular.module('guitarStarApp')
.controller('MainController',function($scope,$http,$timeout,sharedProperties){
  var self = this;
  $scope.User = {};

  $scope.createUser = function(){
    sharedProperties.setUsername($scope.User.name)
    $http.post('/startSong', $scope.User)
            .then(function(data) {
                $scope.info = data;
                console.log(data);
            });
  }

  $scope.getTabs = function(){
    var requestUrl = '/getTabs?songName=' + $scope.User.songName;
    sharedProperties.setSongName($scope.User.songName);
    $http.get(requestUrl)
    .then(function(response){
      $scope.tabs = response.data["tabs"];
      sharedProperties.setTab($scope.tabs);
      showDrum();
    });
  }

  function showDrum (){
    $scope.counter = 0;
    var array = sharedProperties.getTab();
    $scope.onTimeout = function(){
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