'use strict';
angular.module('guitarStarApp')
.controller('ScoreboardController',function($scope,$http,$location,sharedProperties){
  var self = this;
  $scope.User = {};
  $scope.User.name = sharedProperties.getUsername();
  $scope.User.songName = sharedProperties.getSongName();

  $scope.getScore = function(){
    var requestUrl = '/score?name=' + $scope.User.name + '&songName=' + $scope.User.songName;
    $http.get(requestUrl)
    .then(function(response){
      $scope.score = response.data;
      console.log(response)
    })
  };

});