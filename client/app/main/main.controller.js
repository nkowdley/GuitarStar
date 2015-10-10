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
    for(var i = 0; i < tabs.length();i++){
      $scope.num = tabs[i];
      $timeout(callAtTimeout, 3000);
    }
  }

  function callAtTimeout() {
    console.log("Timeout occurred");
  }


});