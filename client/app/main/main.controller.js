'use strict';
angular.module('guitarStarApp')
.controller('MainController',function($scope,$http,$location,sharedProperties){
  var self = this;
  $scope.User = {};

  $scope.createUser = function(){
    sharedProperties.setUsername($scope.User.name)
    sharedProperties.setSongName($scope.User.songName);
    $http.post('/startSong', $scope.User)
            .then(function(data) {
                $scope.info = data;
                console.log(data);
                
    });
    $location.path('/play');
  }
});