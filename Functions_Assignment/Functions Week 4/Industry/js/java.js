/**
Bonnie Carter
September 22, 2014
Week 4
Industry
How much $ does the buyer owe the seller for prorated taxes if the home is sold in month x.
*/

var month = prompt("Your 2014 Closing: \nWhat month are you closing in?");
var day = prompt("Your " +month+ " 2014 closing: \nWhat day are you closing on?");
var yrTax = prompt ("What were your paid in full taxes for 2014?");

console.log(month,day,yrTax);

month = {
    'January' : '01',
    'February' : '02',
    'March' : '03',
    'April' : '04',
    'May' : '05',
    'June' : '06',
    'July' : '07',
    'August' : '08',
    'September' : '09',
    'October' : '10',
    'November' : '11',
    'December' : '12'
};

console.log(month,day,yrTax);

function amountOwed(m,d,t) {

    var monthlyTax = t/12;

    return taxTotal;

    console.log()
}

var total = amountOwed(month,day,yrTax);