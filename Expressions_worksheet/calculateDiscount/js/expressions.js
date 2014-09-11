/**
 * Created by Bonnie Carter
 * Sept 10 2014
 * Activity: Expressions Worksheet
 */

//What are we asking for:
//alert("Do you know how old your dog is in doggy years versus human years? We do!");

//Getting Dog's Age:
//var name = prompt("What is your dog\'s name?");

//test to make sure this works
//console.log(name);

//how old is their dog?
//var age = prompt("How old is your dog?");

//var dogAge = age*7;

//alert the user with the dogs age in human age
//alert(name+" is "+age+" in human years which equates to "+dogAge+" in doggy years!")

//prompt for input of original price, discount, description & sales tax
alert("Thank you for considering our lip gloss, find out what the sale price is here.");

var originalPrice = prompt("How much does the lip gloss cost?");
console.log(originalPrice);

var discountPercent = prompt("What percentage is coming off the price?");
console.log(discountPercent);

var salesTax = prompt("What is the sales tax in your state?");
console.log(salesTax);

//do the math

var paidPercentage = (100-discountPercent)/100

var withoutSalesTax =

var withSalesTax =

//results “Your X was originally $X, but after a X% discount, it is now $X without tax, and $X with tax.”
alert("Your lip gloss was originally $" +originalPrice+ ", but after a" +discountPercent+ "% discount, it is now $"
    +withoutSalesTax+ "without sales tax, and $" +withSalesTax+ " with tax.";