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
    typeOfMeas = "ounce";
    console.log(typeOfMeas+ " should be ounce");
}
else if (initMeasurement.indexOf ("tbsp") != -1) {
    typeOfMeas = "tbsp";
    console.log(typeOfMeas+ " should be tablespoon");
}
else if (initMeasurement.indexOf ("tsp") != -1) {
    typeOfMeas = "tsp";
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

/** if (initMeasurement.indexOf("cup") != -1) {
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
} */    // this was redundant so I removed it.

function kitchenConv(i,n,t){
    if (t == "cup") {

        var cup=n;
        var ounce=parseInt(n)*8;
        var tbsp=parseInt(n)*16;
        var tsp=parseInt(n)*48;
        alert(i+" converts to: " +ounce+ " ounces, " +tbsp+" tablespoons and " +tsp+ " teaspoons");
        console.log(i+" converts to: " +ounce+ " ounces, " +tbsp+" tablespoons and " +tsp+ " teaspoons");
    }else

    if (t == "ounce") {
        cup=parseInt(n)*0.120095;
        ounce=n;
        tbsp=parseInt(n)*1.92152;
        tsp=parseInt(n)*5.76456;
        alert(i+ " converts to: " +cup+ " cup, " +tbsp+ " tablespoons and " +tsp+ " teaspoons");
        console.log(i+ " converts to: " +cup+ " cup, " +tbsp+ " tablespoons and " +tsp+ " teaspoons");
    }else

    if (t == "tbsp") {
        cup=parseInt(n)*.0625;
        ounce=parseInt(n)*.5;
        tbsp=n;
        tsp=parseInt(n)*3;
        alert(i+ " converts to: " +cup+ " cup, " +ounce+ " ounces and " +tsp+ " teaspoons");
        console.log(i+ " converts to: " +cup+ " cup, " +ounce+ " ounces and " +tsp+ " teaspoons");
    }else

    if (t == "tsp") {
        cup=parseInt(n)*0.020833333333333;
        ounce=parseInt(n)*0.16666666666667;
        tbsp=parseInt(n)*0.33333333333333;
        tsp=n;
        alert(i+ " converts to: " +cup+ " cup, " +ounce+ " ounces and " +tbsp+ " tablespoons");
        console.log(i+ " converts to: " +cup+ " cup, " +ounce+ " ounces and " +tbsp+ " tablespoons");
    }
}

kitchenConv(initMeasurement,numberOfMeas,typeOfMeas);