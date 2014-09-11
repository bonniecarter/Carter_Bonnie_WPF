/**
 * Created by Bonnie Carter
 * Sept 10 2014
 * Activity: Expressions Worksheet
 */

//declare variables - and prompts for grocery bill totals.
var week1 = prompt ("What was your grocery bill in week 1?");
var week2 = prompt ("What was your grocery bill in week 2?");
var week3 = prompt ("What was your grocery bill in week 3?");
var week4 = prompt ("What was your grocery bill in week 4?");
var week5 = prompt ("What was your grocery bill in week 5?");

//show array

var allWeeks = [(week1),(week2),(week3),(week4),(week5)];

//add values
console.log(week1);
console.log(week2);
console.log(week3);
console.log(week4);
console.log(week5);

var totalBills = parseInt(allWeeks[0]) + parseInt(allWeeks[1]) + parseInt(allWeeks[2]) + parseInt(allWeeks[3]) + parseInt(allWeeks[4]);
console.log(allWeeks[0]);
console.log(totalBills);

//get average

var averageBills = totalBills/5;
console.log(averageBills);

//"You have spent a total of $X on groceries over 5 weeks. That is an average of $X per week” Output
alert ("You have spent a total of $"+totalBills+" over 5 weeks. That is an average of $"+averageBills+" per week.")

