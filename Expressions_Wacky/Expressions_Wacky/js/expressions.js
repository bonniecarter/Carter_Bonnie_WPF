/**
 * Created by Bonnie Carter
 * Sept 11 2014
 * Activity: Wacky Expressions
 */

//explain the project
alert("Wondering what that storage locker is worth at an auction?");

var lockerWidth = prompt("What is the width of the locker?");
var lockerHeight = prompt("What is the height of the locker?");
var lockerLength = prompt("What is the length of the locker?");

//calculate the locker size

var cubicFeet = lockerHeight*lockerLength*lockerWidth;

//prompt for percentage full

var percentFull = prompt("What percentage of the locker is full (not empty)?");

//prompt for black garbage bags

var garbageBags = prompt("How many black garbage bags do you see?");

//prompt for mystery boxes

var mysteryBoxes = prompt("How many mystery boxes are there?");

//take cubic feet & multiply by percentage full x .01 (percentage to percent) + 25 * the mystery boxes +5 * garbage bags

var valueUnit = cubicFeet*percentFull*.01 + 25*mysteryBoxes + 5*garbageBags;

alert("The value of your storage locker is $" + valueUnit+ ".");