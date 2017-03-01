'use strict';

/**
 * @ngdoc function
 * @name zooAnimalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zooAnimalsApp
 */
angular.module('zooAnimalsApp')
  .controller('MainCtrl', function (AllDataService) {
    var ctrl = this;
    var name, type, zoo, city, state, search;

    ctrl.searchInput = "";
    ctrl.animals   = AllDataService.query();
    ctrl.imagePath = function(name) {
      return "https://www.randomlists.com/img/animals/" + name.toLowerCase() + ".jpg";
    };

    ctrl.filter = function(animal) {
      if (ctrl.searchInput !== "") {
        name   = animal.AnimalName.toLowerCase();
        type   = animal.AnimalTypeDescription.toLowerCase();
        zoo    = animal.ZooName.toLowerCase();
        city   = animal.ZooCity.toLowerCase();
        state  = animal.ZooState.toLowerCase();
        search = ctrl.searchInput.toLowerCase();

        return name.includes(search) ||
          type.includes(search) ||
          zoo.includes(search) ||
          city.includes(search) ||
          state.includes(search);

      }
      return true;

    };

    return ctrl;

  });
