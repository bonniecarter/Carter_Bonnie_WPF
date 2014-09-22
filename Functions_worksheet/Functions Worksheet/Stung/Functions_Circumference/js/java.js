/**
 * Created by Bonnie Carter
 * Created on 09.22.14
 * Assignment Functions Stung!
 */

function beeCalculation(lbs) {
    var beeStings = 8.666666667;
    var beeTotal = lbs * beeStings;
    alert("It takes " +beeTotal+ "bee stings to kill this animal.");

    return beeTotal;
}

var lbAsk = prompt("How many lbs is the animal?");
var total = beeCalculation(lbAsk);

console.log(total);