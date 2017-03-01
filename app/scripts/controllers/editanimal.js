'use strict';

/**
 * @ngdoc function
 * @name zooAnimalsApp.controller:EditanimalCtrl
 * @description
 * # EditanimalCtrl
 * Controller of the zooAnimalsApp
 */
angular.module('zooAnimalsApp')
  .controller('EditAnimalCtrl', function ($mdDialog, animal) {
    var ctrl = this;
    ctrl.animal = animal;

    ctrl.cancel = function() {
      $mdDialog.cancel();
    };

    return ctrl;
  });
