/**
 * Created by Bonnie Carter
 * Sept 11 2014
 * Activity: Personal Expressions
 */

//declare variables & prompts

var floor1 = prompt ("How many square feet on the first floor of your home?");
var floor2 = prompt ("How many square feet on the second floor of your home?");
var floor3 = prompt ("How many square feet on the third floor of your home?");
var basement = prompt ("How many square feet on the basement level of your home?");

//show array

var floors = [ parseInt(floor1) + parseInt(floor2) + parseInt(floor3) + parseInt(basement) ];

//add values

var aboveGrade = parseInt(floor1)+parseInt(floor2)+parseInt(floor3);
var belowGrade = basement;
var totalSquareFootage = floors;

alert("Your above grade square footage is: " +aboveGrade+ " and your below grade square footage is: " +belowGrade+ ". Your total square footage is: " +totalSquareFootage+ ".");