'use strict';

/**
 * @ngdoc service
 * @name zooAnimalsApp.animal
 * @description
 * # animal
 * Factory in the zooAnimalsApp.
 */
angular.module('zooAnimalsApp')
  .factory('animal', function ($resource) {
    // Service logic
    // ...
    return $resource('http://tundrazoo.azurewebsites.net/api/tblAnimals/:id',
      {id: '@id'},
      {
        'update': { method: 'PUT' }
      });

  });
