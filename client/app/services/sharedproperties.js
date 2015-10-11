'use strict';

/**
 * @ngdoc service
 * @name pickMeAmovieApp.sharedProperties
 * @description
 * # sharedProperties
 * Service in the pickMeAmovieApp.
 */
angular.module('guitarStarApp')
  .service('sharedProperties', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var _username = null;
    var _tab = [];
    var _songName = null;
    var _spotify = null;
    //var _minRating = 1;
    //var _maxRating = 10;

    this.getUsername = function () {
        return _username;
    };

    this.setUsername = function(value) {
        _username = value;
    };

    this.getSpotify = function () {
        return _spotify;
    };

    this.setSpotify = function(value) {
        _spotify = value;
    };

    this.getTab = function() {
    	return _tab; 
    };

    this.setTab = function(rating){
    	_tab = rating;
    };

    this.getSongName = function () {
        return _songName;
    };

    this.setSongName = function(value) {
        _songName = value;
    };

});
