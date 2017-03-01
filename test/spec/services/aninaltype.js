'use strict';

describe('Service: aninalType', function () {

  // load the service's module
  beforeEach(module('zooAnimalsApp'));

  // instantiate service
  var aninalType;
  beforeEach(inject(function (_aninalType_) {
    aninalType = _aninalType_;
  }));

  it('should do something', function () {
    expect(!!aninalType).toBe(true);
  });

});
