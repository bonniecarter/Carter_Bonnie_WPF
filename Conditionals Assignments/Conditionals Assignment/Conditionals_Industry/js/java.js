/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Industry
 * How Many Agents?
 */

// average price of home
var averagePriceHome = prompt ("What is the average sale price of homes in your area?");
console.log("Average Price of Home: " +averagePriceHome+ ".");

// if each realtor sells ??? houses
var realtorSells = prompt("How many houses does the average Realtor sell in a year?");
console.log("Average Sales per Year: " +realtorSells+ ".");

// average commission splits
var averageCommissionSplit = prompt ("What is the average commission in the purchase & sales of a home?");
var commissionDecimal = averageCommissionSplit*.01;
console.log("Commission Decimal is: " +commissionDecimal+ ".");

// average agency split
var agencySplit = prompt ("What percent split does your agency keep from it's Realtors?");
var agencySplitDecimal = agencySplit*.01;
var realtorCommSplit = 1.0 - agencySplitDecimal;
console.log("Agency split percentage: " +agencySplitDecimal+ " .");
console.log("Realtor split percentage: " +realtorCommSplit+ " .");

// math, what is the commission?

var commissionDue = averagePriceHome * commissionDecimal;
var coBrokeCommissionDue = commissionDue / 2;
var agencySplitKeep = coBrokeCommissionDue * agencySplitDecimal * realtorSells;
var realtorSplitKeep = coBrokeCommissionDue * realtorCommSplit * realtorSells;
console.log("Total House Commission: " +commissionDue+ ".");
console.log("Total Co-Broke Commission: " +coBrokeCommissionDue+ ".");
console.log("Total Agency Income per Year / per Agent: " +agencySplitKeep+ ".");
console.log("Total Agent makes per year: " +realtorSplitKeep+ ".");

// agent v. broker split

var monthlyCosts = prompt("What are your monthly costs including salaries, utilities, rent & other?");
console.log("Your monthly costs are: $" +monthlyCosts+ ".");

// how many sales per month do you need to make in order to stay afloat and in the green financially?

var yearlyCosts = monthlyCosts*12;
console.log("It costs you $" +yearlyCosts+ " to stay in business every year.");

var numberOfAgents = yearlyCosts/agencySplitKeep;
console.log("Each agent will make an average of $" +realtorSplitKeep+ " per year, while the agency will make an average of $" +agencySplitKeep+ ", per agent, per year. The number of agents you will need to keep your company afloat is " +numberOfAgents+ ".");

var numberCurrentAgents = prompt("How many agents do you currently have?");

if (numberCurrentAgents < numberOfAgents){
    alert("You need " +numberOfAgents+ " to stay in business. You currently have " +numberCurrentAgents+" agents. Time to hire new agents!")
}else{
    alert("You need " +numberOfAgents+ " to stay in business. You currently have " +numberCurrentAgents+" agents. Great! You're on the right track!")
}
