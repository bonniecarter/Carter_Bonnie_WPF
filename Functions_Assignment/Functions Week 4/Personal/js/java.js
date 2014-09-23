/**
Bonnie Carter
September 22, 2014
Week 4
Personal
Idea: Kitchen Conversions
*/

//initial variables

var initMeasurement = prompt("What is your measurement?\nPlease specify cup, ounce, tbsp or tsp.");
var numberOfMeas = initMeasurement.replace(/\D+/g,'');

//test print to track errors

console.log("Initial Measurement Input: "+initMeasurement);
console.log("The number to calculate in measurement is: "+numberOfMeas);


//to split measurement type from string
if (initMeasurement.indexOf("cup") != -1) {
    var typeOfMeas = "cup";
    console.log(typeOfMeas+ " should be cup");
}
else if (initMeasurement.indexOf("ounce") != -1) {
    var typeOfMeas = "ounce";
    console.log(typeOfMeas+ " should be ounce");
}
else if (initMeasurement.indexOf ("tbsp") != -1) {
    var typeOfMeas = "tbsp";
    console.log(typeOfMeas+ " should be tablespoon");
}
else if (initMeasurement.indexOf ("tsp") != -1) {
    var typeOfMeas = "tsp";
    console.log(typeOfMeas+ " should be teaspoon");
}
else {
    console.log("Try again, only cup, ounce, tbsp or tsp is accepted");
}

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

