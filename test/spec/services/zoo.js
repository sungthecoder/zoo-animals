'use strict';

describe('Service: zoo', function () {

  // load the service's module
  beforeEach(module('zooAnimalsApp'));

  // instantiate service
  var zoo;
  beforeEach(inject(function (_zoo_) {
    zoo = _zoo_;
  }));

  it('should do something', function () {
    expect(!!zoo).toBe(true);
  });

});
