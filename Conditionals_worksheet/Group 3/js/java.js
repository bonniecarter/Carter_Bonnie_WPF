/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Worksheets
 * Group 3 Movie Ticket Price
 */

//determine age (55+ or 10-) $7.00 other is $12.00

var age = prompt("What is your age?");

//determine time of movie (3-5pm) is additional discount (25% off)

var showTime = prompt("What time is the show? \n All shows are in PM, no need to type PM.");

//determine age & price

if (age >= 10 && age <=54){
    if (showTime >= 3 && showTime <= 5)
    alert("The ticket price is $9.00")
    else
    alert("The ticket price is $12.00")
}else{
    if (showTime >= 3 && showTime <= 5)
    alert("The ticket price is $5.25")
    else
    alert("The ticket price is 7.00")
}



