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