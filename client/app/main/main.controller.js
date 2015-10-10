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
    $http.get('/getTabs',$scope.User.songName)
    .success(function(data)){
      $scope.tab = data;
      $scope.tab = $scope.tab["tabs"];
    })
    .error(function(data){
      console.log('Error: ' + data);
    })
    
  }  
});