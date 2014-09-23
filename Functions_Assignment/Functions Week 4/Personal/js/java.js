/**
Bonnie Carter
September 22, 2014
Week 4
Personal
Idea: Kitchen Conversions
*/

var initMeasurement = prompt("What is your measurement?\nPlease specify cup, ounce, tbsp or tsp.");

console.log("Initial Measurement Input: "+initMeasurement);

if (initMeasurement.indexOf("cup") ){
    console.log("It's a cup");
}else if (initMeasurement.indexOf("ounce")){
    console.log("It's an ounce");
}else if (initMeasurement.indexOf("tbsp")){
    console.log("It's a tablespoon");
}else if (initMeasurement.indexOf("tsp")){

}else{
    console.log("Try again, only cup, ounce, tbsp or tsp is accepted")
}


