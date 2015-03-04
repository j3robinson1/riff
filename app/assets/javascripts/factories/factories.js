thingKeeper.factory('thingData', function($http) {
  thingData = {
    data: {
      things: [
      ]
    }
  }

  thingData.loadThings = function() {
    // $.ajax.get("/quotes.json")
    $http.get("/things.json").success(functionthingsFromServer) {
      // console.log(quotesFromServer);        
      _.each(thingsFromServer, function(thing){
        thingData.pushThing(thing)  
      })
    });
  }

  thingData.addThing = function(thing) {
    $http.post('/things.json', thing).success(function(thingFromServer){
      thingData.pushThing(thingFromServer);
    })
  }

  thingData.pushThing = function(thing) {
    thingData.data.things.push(thing);
  }

  thingData.deleteThing = function(thingId) {
    $http.delete("/things/" + thingId + ".json").success(function(data) {
      console.log("Success");
      var deletedThing = _.findWhere( thingData.data.things, {id: parseInt(thingId)})
      console.log(thingData.data.things)
      thingData.data.things = _.without(thingData.data.things, deletedThing)
      console.log(quoteData.data.quotes)
    })
  }
  // quoteData.data.quotes[0].quote
  // quoteData.data.quotes[0].quoteMaster

  return thingData;
})