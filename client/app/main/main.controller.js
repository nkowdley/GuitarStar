'use strict';
(function() {

function MainController($scope, $http) {
  var self = this;

  $scope.createUser = function(){
    $http.post('/startSong', {name: self.name, song_name: self.song})
            .success(function(data) {
                $scope.info = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
    });
}

angular.module('guitarStarApp')
  .controller('MainController', MainController);

})();
