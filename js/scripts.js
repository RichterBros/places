function catalog() {
  this.places = [];
  this.currentId = 0;
}

catalog.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places.push(place);
}

catalog.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


Place.prototype.fullName = function() {
  return this.location + " " + this.landmark;
  
}

catalog.prototype.findPlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i];
      }
    }
  };
  return false;
}

catalog.prototype.deletePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        delete this.places[i];
        return true;
      }
    }
  };
  return false;
}

catalog.prototype.updatePlace = function(id) {
  for (var i=0; i< this.places.length; i++) {
    if (this.places[i]) {
      if (this.places[i].id == id) {
        return this.places[i].notes = "310-353- 2322";
      }
    }
  };
  return false;
}

function Place(location, landmark, notes) {
  this.location = location;
  this.landmark = landmark;
  this.notes = notes;
}

var catalog = new catalog();
var place = new Place("Brazil", "San Paulo", "Saw Pearl Jam");
var place2 = new Place("NYC", "Highline", "People Watching");
var place3 = new Place("LA", "Venice Beach", "skatepark")
catalog.addPlace(place);
catalog.addPlace(place2);
catalog.addPlace(place3);

// var look = catalog.findPlace(2);
// catalog.deletePlace(3);
// var check = catalog.updatePlace(1);

$(document).ready(function () {
  $("#place1").click(function () {
    $(".location1Details").fadeToggle();
  })
  $("#place2").click(function () {
    $(".location2Details").fadeToggle();
  })
  $("#place3").click(function () {
    $(".location3Details").fadeToggle();
  })
  
  $(".location1Details").text(": " + place.landmark + ", " + place.notes);
  $(".location2Details").text(": " + place2.landmark + ", " + place2.notes);
  $(".location3Details").text(": " + place3.landmark + ", " + place3.notes);
  $("#place1").text(place.location)
  $("#place2").text(place2.location)
  $("#place3").text(place3.location)
});
