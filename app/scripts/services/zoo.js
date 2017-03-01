'use strict';

/**
 * @ngdoc service
 * @name zooAnimalsApp.zoo
 * @description
 * # zoo
 * Factory in the zooAnimalsApp.
 */
angular.module('zooAnimalsApp')
  .factory('zoo', function ($resource) {
    // Service logic
    // ...
    return $resource('http://tundrazoo.azurewebsites.net/api/tblZoos/:id');

  });
