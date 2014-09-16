/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Personal
 * Assignment: Hours in a day!!!
 */

var sleepHrs = prompt("How many hours of sleep do you need a day?");
var workHrs = prompt("How many hours of work do you have a week?");
var schoolHrs = prompt("How many hours do you dedicate to school a week?");
var familyHrs = prompt("How many hours do you spend with your family a week?");
var extraHrs = prompt("We all have to eat and need a few minutes of down time to ourselves. \nHow many hours a day do you need a day to yourself?");

var sleepWk = sleepHrs*7;
var extraWk = extraHrs*7;

console.log("Sleep Hours " +sleepHrs+ ". Work Hours " +workHrs+ ". School Hours " +schoolHrs+ ". Family Hours " +familyHrs+ ". Extra Hours " +extraHrs+ ". Sleep Per Week " +sleepWk+ ". Extras Per Week " +extraWk+ ".");

var totalHrs = (sleepWk) + (workHrs) + (schoolHrs) + (familyHrs) + (extraWk);

console.log("You need " +totalHrs+ " per week.");

var hrsPerDay = totalHrs / 7;

console.log("That's " +hrsPerDay+ " you have accounted for.");

enoughTime = (hrsPerDay > 24) ? "You need to prioritize, you are out of time!" : "Great job scheduling your time, super efficient!";
console.log(enoughTime);