'use strict';
angular.module('guitarStarApp')
.controller('MainController',function($scope,$http){
  var self = this;
  $scope.User = {};

  $scope.createUser = function(){
    $http.post('/startSong', $scope.User)
            .success(function(data) {
                $scope.info = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
    });
  }

  $scope.getTabs = function(){
    var requestUrl = '/getTabs?songName=' + User.songName;
    $http.get(requestUrl)
    .then(function(data){
      $scope.tabs = data;
    });
  }  
});