/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Worksheets
 * Group 2 Grade Letter Calculator
 */

//determine number grade

var grade = prompt ("What grade did you receive?");

//calculate to letter “You have a X%, which means you have earned a(n) X in the class!”

if (grade >= 95){

    alert("You have a " +grade+ "%, which means you have earned an A+ in the class!")
    console.log("You have a " +grade+ "%, which means you have earned an A+ in the class!")
}

if (grade >= 90 && grade <= 94){

    alert("You have a " +grade+ "%, which means you have earned an A in the class!")
    console.log("You have a " +grade+ "%, which means you have earned an A in the class!")
}

if (grade >= 85 && grade <= 89){

    alert("You have a " +grade+ "%, which means you have earned a B+ in the class!")
    console.log("You have a " +grade+ "%, which means you have earned a B+ in the class!")
}

if (grade >= 80 && grade <= 84){

    alert("You have a " +grade+ "%, which means you have earned a B in the class!")
    console.log("You have a " +grade+ "%, which means you have earned a B in the class!")
}

if (grade >= 76 && grade <= 79){

    alert("You have a " +grade+ "%, which means you have earned a C+ in the class!")
    console.log("You have a " +grade+ "%, which means you have earned a C+ in the class!")
}

if (grade >= 73 && grade <= 75){

    alert("You have a " +grade+ "%, which means you have earned a C in the class!")
    console.log("You have a " +grade+ "%, which means you have earned a C in the class!")
}

if (grade >= 70 && grade <= 72){

    alert("You have a " +grade+ "%, which means you have earned a D in the class!")
    console.log("You have a " +grade+ "%, which means you have earned a D in the class!")
}

if (grade <= 69){

    alert("You have a " +grade+ "%, which means you have earned an F in the class!")
    console.log("You have a " +grade+ "%, which means you have earned an F in the class!")
}
