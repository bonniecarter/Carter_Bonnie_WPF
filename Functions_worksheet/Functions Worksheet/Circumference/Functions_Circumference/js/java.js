/**
 * Created by Bonnie Carter
 * Created on 09.22.14
 * Assignment Functions Circumference
 */

//Calculate the circumference of a circle

/**
 function circum() {
  var radius = prompt("Enter the radius of the circle","");
  var circle = 2 * Math.PI * radius;
  alert("The circumference is "+circle+".")
}
 */

var radius = prompt("Enter the radius of the circle:");

function calcCircum(radius){
    var circle;
    circle = 2 * Math.PI * radius;

    return circle;
}

var circle;
var circleIs = "The circumference of the circle is" +circle+".";

console.log(circleIs);