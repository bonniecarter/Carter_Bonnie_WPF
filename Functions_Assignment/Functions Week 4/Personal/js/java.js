/**
Bonnie Carter
September 22, 2014
Week 4
Personal
Idea: Kitchen Conversions
*/

var initMeasurement = prompt("What is your measurement?\nPlease specify cup, ounce, tbsp or tsp.");

console.log("Initial Measurement Input: "+initMeasurement);

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
 */

if (initMeasurement.indexOf == "cup") {
    console.log("It's a cup");
}
else if (initMeasurement == "ounce") {
    console.log("It's an ounce");
}
else if (initMeasurement == "tbsp") {
    console.log("It's a tablespoon");
}
else if (initMeasurement == "tsp") {
    console.log("It's a teaspoon");
}
else {
    console.log("Try again, only cup, ounce, tbsp or tsp is accepted");
}



