angular.module('todoController', [])

	// inject the Todo service factory into our controller
	.controller('mainController', ['$scope', function($scope) {
		$scope.variables = ["one","two","three"];
	}]);