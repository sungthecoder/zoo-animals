'use strict';

describe('Directive: animalForm', function () {

  // load the directive's module
  beforeEach(module('zooAnimalsApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<animal-form></animal-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the animalForm directive');
  }));
});
