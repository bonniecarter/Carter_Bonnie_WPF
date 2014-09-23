/**
Bonnie Carter
September 22, 2014
Week 4
Industry
How much $ does the buyer owe the seller for prorated taxes if the home is sold in month x.
*/

var month = prompt("Your 2014 Closing: \nWhat month are you closing in (Use Number Only)?");
var day = prompt("Your " +month+ " 2014 closing: \nWhat day are you closing on?");
var yrTax = prompt ("What were your paid in full taxes for 2014?");

console.log(month,day,yrTax);

function amountOwed(m,d,t) {

    var wholeMonTax = (t/12) * (12-month);

    if (month == 1 || 3 || 5 || 7 || 8 || 10 ||12){
        var daysOfMonTax = (wholeMonTax/31)(31-d);
    }else{
        if (month == 2){
            daysOfMonTax = (wholeMonTax/28)(28-d);
        }else{
            daysOfMonTax = (wholeMonTax/30)(30-d);
        }

    }

    console.log("month " +m+ ", day " +d+ ", tax for year " +t+ ".");
    console.log("taxes per month" +wholeMonTax+ ", taxable amount in current month " +daysOfMonTax);

    return taxTotal;
}

var total = amountOwed(month,day,yrTax);