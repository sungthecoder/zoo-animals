'use strict';

describe('Service: animal', function () {

  // load the service's module
  beforeEach(module('zooAnimalsApp'));

  // instantiate service
  var animal;
  beforeEach(inject(function (_animal_) {
    animal = _animal_;
  }));

  it('should do something', function () {
    expect(!!animal).toBe(true);
  });

});
