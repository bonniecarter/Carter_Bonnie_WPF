/**
 * Created by Bonnie Carter
 * Created on 09.22.14
 * Assignment Functions Stung!
 */

function beeCalculation(lbs) {     //created function called beeCalculation that holds the lbs parameter
    var beeStings = 8.666666667;       //it takes 8.666666667 bee stings per pound
    var beeTotal = lbs * beeStings;          //getting the total lbs times stings
    alert("It takes " +beeTotal+ "bee stings to kill this animal.");   //alert user of bee total

    return beeTotal;
}

var lbAsk = prompt("How many lbs is the animal?");
var total = beeCalculation(lbAsk);

console.log(total);