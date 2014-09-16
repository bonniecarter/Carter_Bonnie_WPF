/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Worksheets
 * Group 1 Celsius to Fahrenheit Converter
 */

//enter degrees

var degrees = prompt ("What temperature is it outside? Please enter numbers only");

//enter fahrenheit or celsius

var fahOrCel = prompt ("is it fahrenheit or celsius?");

//if fahrenheit then

if (fahOrCel == fahrenheit){

    var celsiusDegree = 5/9 * (degrees - 32);
    alert("It is " +celsiusDegree+ " celsius outside!")
    console.log("The temperature is " +celsiusDegree+ " degrees Celsius.")
}else{

    var fahrenheitDegree = 9/5 * degrees + 32
    alert("It is " +fahrenheitDegree+ " fahrenheit outside!")
    console.log("The temperature is " +fahrenheitDegree+ " degrees Celsius.")
}

//else

