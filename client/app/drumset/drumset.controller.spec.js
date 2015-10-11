'use strict';

describe('Controller: DrumsetCtrl', function () {

  // load the controller's module
  beforeEach(module('guitarStarApp'));

  var DrumsetCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DrumsetCtrl = $controller('DrumsetCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
