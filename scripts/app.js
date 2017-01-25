/* JavaScript lives here */

console.log("App Started");

var firstHeading = document.getElementById("firstHeading");






//create a reference to the button on the page (index.html)
var clickMeButton = document.getElementById("clickMeButton");

// add an event listener - for the click event and call the click function
clickMeButton.addEventListener("click", clickMe);

//click function - used as an event handler
function clickMe(){
	console.log("Clicked!");
}

/* var p = document.createElement("p");

var snippet = p.createTextNode("This is a paragraph.");

targetArea.appendChild(snippet); */