/**
 * Created by Bonnie Carter
 * Created on 09.22.14
 * Assignment Functions Circumference
 */

//Calculate the circumference of a circle

/**
 function circumference() {
  var radius = prompt("Enter the radius of the circle","");
  var circle = 2 * Math.PI * radius;
  alert("The circumference is "+circle+".")
}
 */

var radius = prompt("Enter the radius of the circle","");

function circumference(radius) {

    var circle = 2 * Math.PI * radius;
    alert("The circumference is "+circle+".")
}