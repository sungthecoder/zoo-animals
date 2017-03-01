'use strict';

describe('Service: animalService', function () {

  // load the service's module
  beforeEach(module('zooAnimalsApp'));

  // instantiate service
  var animalService;
  beforeEach(inject(function (_animalService_) {
    animalService = _animalService_;
  }));

  it('should do something', function () {
    expect(!!animalService).toBe(true);
  });

});
