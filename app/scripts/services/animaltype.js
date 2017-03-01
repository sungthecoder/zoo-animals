'use strict';

/**
 * @ngdoc service
 * @name zooAnimalsApp.aninalType
 * @description
 * # aninalType
 * Factory in the zooAnimalsApp.
 */
angular.module('zooAnimalsApp')
  .factory('animalType', function ($resource) {
    // Service logic
    // ...

    return $resource('http://tundrazoo.azurewebsites.net/api/tblAnimalTypes/:id');
  });
