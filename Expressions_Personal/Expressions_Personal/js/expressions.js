/**
 * Created by Bonnie Carter
 * Sept 11 2014
 * Activity: Personal Expressions
 */

var totalSquareFootage = [ (floor1) + (floor2) + (floor3) + (basement) ];

var floor1 = prompt ("How many square feet on the first floor of your home?");
var floor2 = prompt ("How many square feet on the second floor of your home?");
var floor3 = prompt ("How many square feet on the third floor of your home?");
var basement = prompt ("How many square feet on the first floor of your home?");

var aboveGrade = floor1+floor2+floor3;
var belowGrade = basement;

alert("Your above grade square footage is: " +aboveGrade+ " and your below grade square footage is: " +belowGrade+ ". Your total square footage is: " +totalSquareFootage+ ".");