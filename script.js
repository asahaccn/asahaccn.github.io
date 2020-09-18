/*We know that Javascript reads from the DOM and effects the event.
  In this script.js file we will do two things first make both the input color
  interactive so that every time a color is chosen the background gradient changes
  for both the color and the corresponding css color is printed in css format.
  */

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  //syntax
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background; //for gradient color selected in css text format.
}

//here we will use the input event
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//This event of input gets triggered automatically and runs the function we don't
//need to run the function because the input event is triggered automatically and the
//second parameter i.e function runs with the event.
