/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Industry
 * How Many Agents?
 */

// average price of home
var averagePriceHome = prompt ("What is the average sale price of homes in your area?");

// if each realtor sells ??? houses
var realtorSells = prompt("How many houses does the average Realtor sell?");

// average commission splits
var averageCommissionSplit = prompt ("What is the average commission in the purchase & sales of a home?");
var commissionDecimal = averageCommissionSplit*.01;
console.log("Commission split for entire transaction is " +commissionDecimal+".");

// math, what is the commission?

var commissionDue = averagePriceHome * commissionDecimal;
var coBrokeCommissionDue = commissionDue/2;
console.log("The total commission due on a sale is $" +commissionDue+". Yet with a co-broke the total commission due on a sale is $" +coBrokeCommissionDue+ ".");



