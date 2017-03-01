'use strict';

describe('Controller: EditanimalCtrl', function () {

  // load the controller's module
  beforeEach(module('zooAnimalsApp'));

  var EditanimalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditanimalCtrl = $controller('EditanimalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditanimalCtrl.awesomeThings.length).toBe(3);
  });
});
