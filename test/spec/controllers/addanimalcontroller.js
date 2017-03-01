'use strict';

describe('Controller: AddanimalcontrollerCtrl', function () {

  // load the controller's module
  beforeEach(module('zooAnimalsApp'));

  var AddanimalcontrollerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddanimalcontrollerCtrl = $controller('AddanimalcontrollerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddanimalcontrollerCtrl.awesomeThings.length).toBe(3);
  });
});
