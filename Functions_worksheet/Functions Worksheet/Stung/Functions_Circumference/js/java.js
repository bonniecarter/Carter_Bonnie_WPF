/**
 * Created by Bonnie Carter
 * Created on 09.22.14
 * Assignment Functions Stung!
 */

function beeCalculation(lbs) {     //created function called beeCalculation that holds the lbs parameter
    var beeStings = 8.666666667;       //it takes 8.666666667 bee stings per pound
    var beeTotal = lbs * beeStings;          //getting the total lbs times stings
    alert("It takes " +beeTotal+ "bee stings to kill this animal.");   //alert user of bee total

    return beeTotal;        //return bee total to outside of function
}

var lbAsk = prompt("How many lbs is the animal?");     //prompt user to find out total lbs of animal
var total = beeCalculation(lbAsk);      //create a hold for the beeTotal in total and run the beeCalculation function

console.log(total);         //print out the total