'use strict';

/**
 * @ngdoc function
 * @name zooAnimalsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the zooAnimalsApp
 */
angular.module('zooAnimalsApp')
  .controller('MainCtrl', function (AllData, animal,$mdDialog) {
    var ctrl = this;
    var name, type, zoo, city, state, search, newAnimal;

    function closeMenu(event){
      event.currentTarget.parentElement.parentElement.parentElement.setAttribute('data-mfb-state', 'closed');
    }

    ctrl.searchInput = "";
    ctrl.animals   = AllData.query();
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

    ctrl.addAnimal = function(ev) {
      closeMenu(ev);
      $mdDialog.show({
        controller: 'AddAnimalCtrl as ctrl',
        templateUrl: 'views/add-animal-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: false
      }).then(function(result){
        newAnimal = {
          AnimalName: result.AnimalName,
          AnimalTypeID_F: result.type.AnimalTypeID,
          ZooID_F: result.zoo.ZooID
        };
        animal.save(newAnimal, function(saved){
          ctrl.animals
            .push(Object.assign({}, result.type, result.zoo, saved));
        });
      });
    };

    ctrl.editAnimal = function(ev, toEdit, index) {
      $mdDialog.show({
        controller: 'EditAnimalCtrl as ctrl',
        templateUrl: 'views/edit-animal-dialog.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        locals: {
          animal: toEdit
        },
        clickOutsideToClose: false
      }).then(function(result){
        newAnimal = animal.get({id: result.AnimalID}, function() {
          newAnimal.id         = result.AnimalID;
          newAnimal.AnimalName = result.AnimalName;
          newAnimal.AnimalTypeID_F = result.type.AnimalTypeID;
          newAnimal.ZooID_F = result.zoo.ZooID;

          animal.update({ id: result.AnimalID }, newAnimal)
        });
        console.log(result);
      });
    };

    ctrl.deleteAnimal = function(ev, toDelete, index) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure to remove this animal?')
        .textContent('This animal will be missed.')
        .targetEvent(ev)
        .ok('Please do it!')
        .cancel("No, don't delete it!")

        $mdDialog.show(confirm).then(function(){
          animal.delete({id: toDelete.AnimalID}, function(){
            ctrl.animals.splice(index, 1);
        });
      });
    }

    ctrl.addZoo = function(ev) {
      closeMenu(ev);
      var alert = $mdDialog.alert()
        .parent(document.body)
        .clickOutsideToClose(true)
        .title('Sorry, this feature is still in pregress')
        .textContent('Our developers are working hard to make this work!')
        .ok('Got it!')
        .targetEvent(ev);

      $mdDialog.show(alert);
    };

    return ctrl;
  });
