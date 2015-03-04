var indexCtrl = aLaCarte.controller('indexCtrl', function($scope, thingData) {
    $scope.some_text = {thing: "test test test test test", thingType: "FIVE"};
    $scope.month = "july";
    $scope.things = thingData.data;
    $scope.formThing = '';
    $scope.formThingType = '';
    thingData.loadThings();
    $scope.changeThing = function() {    
      $scope.some_text = _.sample($scope.things.things);
    };

    $scope.submitForm = function() {
      thingData.addThing(
        {
          thing: {
            thing: $scope.formThing, thing_type: $scope.formThingType
          }
        }
      );
      $scope.formThing = '';
      $scope.formThingType = '';
    };

    $scope.deleteThing = function(thingId) {
      quoteThing.deleteThing(thingId);
    }
});

// var indexCtrl = addressBook.controller('someOtherCtrl', function($scope) {
//     $scope.some_text = "Welcome to Earth. - Will Smith";
// });