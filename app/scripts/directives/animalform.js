'use strict';

/**
 * @ngdoc directive
 * @name zooAnimalsApp.directive:animalForm
 * @description
 * # animalForm
 */
angular.module('zooAnimalsApp')
  .controller ('AnimalFormCtrl', function($mdDialog, zoo, animalType){
    var ctrl = this;
    var zooId, typeId, currentZoo, currentType;

    ctrl.zoos = zoo.query(function(result){
      initAnimalZoo(ctrl.animal, result);
    });
    ctrl.animalTypes = animalType.query(function(result){
      initAnimalType(ctrl.animal, result);
    });

    ctrl.cancel = function() {
      $mdDialog.cancel();
    };

    ctrl.save = function() {
      $mdDialog.hide(ctrl.animal);
    };

    ctrl.$onInit = function() {
      if(_.isUndefined(ctrl.animal)){
        ctrl.animal = {};
      } else {
        initAnimalZoo(ctrl.animal, ctrl.zoos);
        initAnimalType(ctrl.animal, ctrl.types);
      }
    }

    function initAnimalZoo(animal, zooList){
      var currentZoo;
      if(_.isUndefined(zooList) || _.isUndefined(animal)){
        return;
      }
      currentZoo = _.find(zooList, function(o){
        return animal.ZooID_F === o.ZooID;
      });
      animal.zoo = currentZoo;
    }

    function initAnimalType(animal, typeList){
      var currentType;
      if(_.isUndefined(typeList) || _.isUndefined(animal)){
        return;
      }
      currentType = _.find(typeList, function(o){
        return animal.AnimalTypeID_F === o.AnimalTypeID;
      });
      animal.type = currentType;
    }

  }).component('animalForm',{
    templateUrl: 'views/animal-form.html',
    bindings: {
      animal: '<',
      edit: '<'
    },
    controller: 'AnimalFormCtrl as ctrl'
  });
