/**
 * Created by Bonnie Carter
 * Sept 10 2014
 * Activity: Expressions Worksheet
 */

//Find out how many pizzas there were
alert("If you can't remember how much Sparky ate and if he deserves a cookie or not, we know!");

//Find out variables
//people
var attendees = prompt ("How many folks attended your party?");

//pizzas
var pizzas = prompt ("How many pizzas did you order last night?");

var pizzaSlices = pizzas*8;
var pizzaPerGuest = parseInt(pizzaSlices/attendees);
var pizzaRemainder = pizzaSlices%attendees;

console.log(pizzaSlices);
console.log(pizzaPerGuest);
console.log(pizzaRemainder);

alert("At your party last night you had "+attendees+" folks partying into the night. Each of your guests consumed "
    +pizzaPerGuest+" slices of pizza leaving sparky with a full belly from eating "+pizzaRemainder+" pieces of pizza.");

//input for array (5 items)

//add up & get average of grocery bills

//print

//declare variables
var Week1 = prompt ("What was your grocery bill in week 1?");
var Week2 = prompt ("What was your grocery bill in week 2?");
var Week3 = prompt ("What was your grocery bill in week 3?");
var Week4 = prompt ("What was your grocery bill in week 4?");
var Week5 = prompt ("What was your grocery bill in week 5?");

//get inputs for grocery bills
