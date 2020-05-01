var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mm = new Hammer(myElement);

// listen to events...
mm.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});

var oof = new Hammer.Manager(myElement);

// create a pinch and rotate recognizer
// these require 2 pointers
var pinch = new Hammer.Pinch();
var rotate = new Hammer.Rotate();

// we want to detect both the same time
pinch.recognizeWith(rotate);

// add to the Manager
oof.add([pinch, rotate]);


oof.on("pinch rotate", function(ev) {
    myElement.textContent += ev.type +" ";
});