'use strict';

/**
 * @ngdoc service
 * @name zooAnimalsApp.animalService
 * @description
 * # animalService
 * Factory in the zooAnimalsApp.
 */
angular.module('zooAnimalsApp')
  .factory('AllData', function ($resource) {
    // Service logic
    // ...
    return $resource('http://tundrazoo.azurewebsites.net/api/viewAllDatas/:id');

  });
