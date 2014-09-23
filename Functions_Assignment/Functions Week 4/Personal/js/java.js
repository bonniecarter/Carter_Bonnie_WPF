/**
Bonnie Carter
September 22, 2014
Week 4
Personal
Idea: Kitchen Conversions
*/

var initMeasurement = prompt("What is your measurement?\nPlease specify cup, ounce, tbsp or tsp.");
var numberOfMeas = initMeasurement.replace(/^\D+/g, '');

console.log("Initial Measurement Input: "+initMeasurement);
console.log("The number to calculate in measurement is: "+numberOfMeas);

//to split measurement type from string

if (initMeasurement.indexOf("cup") != -1) {
    console.log("It's a cup");
    var typeOfMeas = "cup";
}
else if (initMeasurement.indexOf("ounce") != -1) {
    console.log("It's an ounce");
    var typeOfMeas = "ounce";
}
else if (initMeasurement.indexOf ("tbsp") != -1) {
    console.log("It's a tablespoon");
    var typeOfMeas = "tbsp";
}
else if (initMeasurement.indexOf ("tsp") != -1) {
    console.log("It's a teaspoon");
    var typeOfMeas = "tsp";
}
else {
    console.log("Try again, only cup, ounce, tbsp or tsp is accepted");
}

console.log("the Type of Measurement (in code) is: " +typeOfMeas+ ". Did it work?");

/** if (initMeasurement.indexOf("cup") ){
    console.log("It's a cup");
}else if (initMeasurement.indexOf("ounce")){
    console.log("It's an ounce");
}else if (initMeasurement.indexOf("tbsp")){
    console.log("It's a tablespoon");
}else if (initMeasurement.indexOf("tsp")){
    console.log("It's a teaspoon");
}else{
    console.log("Try again, only cup, ounce, tbsp or tsp is accepted")
}
 */ //this did not work!!! i did however figure out the .indexOf below.

if (initMeasurement.indexOf("cup") != -1) {
    console.log("It's a cup");
}
else if (initMeasurement.indexOf("ounce") != -1) {
    console.log("It's an ounce");
}
else if (initMeasurement.indexOf ("tbsp") != -1) {
    console.log("It's a tablespoon");
}
else if (initMeasurement.indexOf ("tsp") != -1) {
    console.log("It's a teaspoon");
}
else {
    console.log("Try again, only cup, ounce, tbsp or tsp is accepted");
}

