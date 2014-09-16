/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Industry
 * How Many Agents?
 */

// average price of home
var averagePriceHome = prompt ("What is the average sale price of homes in your area?");

// if each realtor sells ??? houses
var realtorSells = prompt("How many houses does the average Realtor sell in a year?");

// average commission splits
var averageCommissionSplit = prompt ("What is the average commission in the purchase & sales of a home?");
var commissionDecimal = averageCommissionSplit*.01;

// average agency split
var agencySplit = prompt ("What percent split does your agency keep from it's Realtors?");
var agencySplitDecimal = agencySplit*.01;

console.log("Commission split for entire transaction is " +commissionDecimal+".");
console.log("The Agency keeps " +agencySplitDecimal+ " of the commission.");

// math, what is the commission?

var commissionDue = averagePriceHome * commissionDecimal;
var coBrokeCommissionDue = commissionDue/2;
var agencySplitKeep = coBrokeCommissionDue * agencySplitDecimal;
var agentSplitKeep = coBrokeCommissionDue * (1.-agencySplitDecimal);
console.log("The total commission due on a $" +averagePriceHome+ " sale is $" +commissionDue+". Yet with a co-broke the total commission due on a sale is $" +coBrokeCommissionDue+ ". Where the agency will keep a split of $" +agencySplitKeep+ " for each sale.");
console.log("The agent will keep $" +agentSplitKeep+ " from each transaction.");

// agent v. broker split

var monthlyCosts = prompt("What are your monthly costs including salaries, utilities, rent & other?");

// how many sales per month do you need to make in order to stay afloat and in the green financially?

var yearlyAgentIncome = agentSplitKeep*12;
var yearlyCosts = monthlyCosts*12;
var yearlySplitPerAgent = agencySplitKeep*12;

var numberOfAgents = yearlyCosts/yearlySplitPerAgent;
console.log("Each agent will make an average of $" +yearlyAgentIncome+ " per year, while the agency will make an average of $" +yearlySplitPerAgent+ ", per agent, per year. The number of agents you will need to keep your company afloat is " +numberOfAgents+ ".");

alert("The number of agents you will need to keep your company afloat is " +numberOfAgents+ ",");

var numberCurrentAgents = prompt("How many agents do you currently have?");

if (numberCurrentAgents < numberOfAgents){
    alert("Time to hire new agents!")
}else{
    alert("Great! You're on the right track!")
}
