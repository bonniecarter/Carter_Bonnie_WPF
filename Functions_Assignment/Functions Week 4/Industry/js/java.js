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

console.log("Month: "+month+ " Day: "+day+ " Tax Per Year: $" +yrTax);

    //var wholeMonTax = (yrTax/12) * (12-month);

var moTax = yrTax / 12;
var moRemain = 12 - month;
var moTaxedRemainWhole = moTax*moRemain;


    if (month == 1 || 3 || 5 || 7 || 8 || 10 ||12){
        var daysOfMonTax = (moTax/31)*(31-day);
    }else{
        if (month == 2){
            daysOfMonTax = (moTax/28)*(28-day);
        }else{
            daysOfMonTax = (moTax/30)*(30-day);
        }

    }

    console.log("month " +month+ ", day " +day+ ", tax for year " +yrTax+ ".");
    console.log("taxes per month $" +moTax+ ", months remaining in the year: " +moRemain+ ", tax full months: " +moTaxedRemainWhole+".");


var total = amountOwed(month,day,yrTax);