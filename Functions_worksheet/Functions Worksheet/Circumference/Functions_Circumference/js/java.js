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

function calcCircum(radius){  //create function calcCirc and parameter radius
    var circle = 2 * Math.PI * radius;  //create calculation for the diameter 2*pi*r
    alert("The circumference of the circle is: "+circle+""); //alert the user
    return circle; //return the circle outside of the function to the "total" variable
}

var radiusAsk = prompt("What is the radius of your circle?"); //create a prompt to hold a variable & insert...
var total = calcCircum(radiusAsk); //...insert variable into calcCircum function into the radius variable

console.log(total); //print the total circumference from the calcCircum function