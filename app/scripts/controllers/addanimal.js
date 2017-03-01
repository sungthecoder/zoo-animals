'use strict';

/**
 * @ngdoc function
 * @name zooAnimalsApp.controller:AddanimalcontrollerCtrl
 * @description
 * # AddanimalcontrollerCtrl
 * Controller of the zooAnimalsApp
 */
angular.module('zooAnimalsApp')
  .controller('AddAnimalCtrl', function($mdDialog) {
    var ctrl = this;
    ctrl.aninal = {};

    ctrl.cancel = function() {
      $mdDialog.cancel();
    };
  });
