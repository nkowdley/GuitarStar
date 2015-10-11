'use strict';

angular.module('guitarStarApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngAudio'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController'
      })
      .when('/play', {
        templateUrl: 'app/drumset/drumset.html',
        controller: 'DrumsetController'
      })
      .when('/scoreboard', {
        templateUrl: 'app/scoreboard/scoreboard.html',
        controller: 'ScoreboardController'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  });
