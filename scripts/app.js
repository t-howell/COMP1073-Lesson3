/* JavaScript lives here */

console.log("App Started");

//declare/initialize firstHeading variable
//firstHeading creates a link to the h1 element on the page 
var firstHeading = document.getElementById("firstHeading");

//can use firstHeading js variable as though it is the html h1 element
window.alert(firstHeading.textContent);



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