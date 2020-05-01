var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mm = new Hammer(myElement);

// listen to events...
mm.on("panleft panright tap press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
});