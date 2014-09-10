/**
 * Created by Bonnie Carter
 * Sept 10 2014
 * Activity: Expressions Worksheet
 */

//What are we asking for:
alert("Do you know how old your dog is in human years? We do!");

//Getting Dog's Age:
var name = prompt("What is your dog\'s name?");

//test to make sure this works
console.log(name);

//how old is their dog?
var age = prompt("How old is your dog?");

var dogAge = age*7;

//alert the user with the dogs age in human age
alert(name+" is "+dogAge+"in human years")