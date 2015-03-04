var indexCtrl = thingKeeper.controller('indexCtrl', function($scope, quoteData) {
    $scope.some_text = {quote: "test test test test test", thingType: "FIVE"};
    $scope.things = thingData.data;
    $scope.formThing = '';
    $scope.formThingType = '';
    thingData.loadThings();
    $scope.changeQuote = function() {      
      $scope.some_text = _.sample($scope.things.things);
    };

    $scope.submitForm = function() {
      quoteData.addQuote(
        {
          quote: {
            quote: $scope.formThing, quote_master: $scope.formThingType
          }
        }
      );
      $scope.formThing = '';
      $scope.formThingType = '';
    };

    $scope.deleteThing = function(quoteId) {
      quoteThing.deleteThing(thingId);
    }
});

// var indexCtrl = addressBook.controller('someOtherCtrl', function($scope) {
//     $scope.some_text = "Welcome to Earth. - Will Smith";
// });