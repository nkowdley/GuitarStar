'use strict';
angular.module('guitarStarApp')
.controller('ScoreboardController',function($scope,$http,$location,sharedProperties){
  var self = this;
  $scope.User = {};
  $scope.User.name = sharedProperties.getUsername();
  $scope.User.songName = sharedProperties.getSongName();

  getScore();
  getLeaderboard();

  function getScore(){
    var requestUrl = '/score?name=' + $scope.User.name + '&songName=' + $scope.User.songName;
    $http.get(requestUrl)
    .then(function(response){
      $scope.score = response.data;
      console.log($scope.score);
    })
  };

  function getLeaderboard(){
    $http.get('/leaderboard')
    .then(function(response){
      $scope.leaderboard = response.data;
      console.log($scope.leaderboard);
    })
  };

});