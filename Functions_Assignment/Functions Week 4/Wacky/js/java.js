/**
Bonnie Carter
September 22, 2014
Week 4
Wacky
Idea: Your Signs
*/

//defining variables

var month = prompt("What month were you born in?\nUse numbers only (ex. 03).");
var day = prompt("What day were you born on?");
var year = prompt("What year were you born in?");

//function

function zodiac(m,d,y){
    if (m == 1) {
        if (d >= 1 && d <= 19)
        {
        var sign = "capricorn";
        }else{
            sign = "Aquarius";
        }
        console.log("the output will be " +sign);
    }else if (m == 2) {
        if (d >= 1 && d <= 18)
        {
            sign = "Aquarius";
        }else{
            sign = "Pisces";
        }
        console.log("the output will be " +sign);
    }else if (m == 3 || "31") {
        if (d >= 1 && d <= 20)
        {
            sign = "Pisces";
        }else{
            sign = "Aries";
        }
        console.log("the output will be " +sign);
    }else if (m == 4) {
        if (d >= 1 && d <= 19)
        {
            sign = "Aries";
        }else{
            sign = "Taurus";
        }
        console.log("the output will be " +sign);
    }else if (m == 5) {
        if (d >= 1 && d <= 20)
        {
            sign = "Taurus";
        }else{
            sign = "Gemini";
        }
        console.log("the output will be " +sign);
    }else if (m == 6) {
        if (d >= 1 && d <= 20)
        {
            sign = "Gemini";
        }else{
            sign = "Cancer";
        }
        console.log("the output will be " +sign);
    }else if (m == 7) {
        if (d >= 1 && d <= 22)
        {
            sign = "Cancer";
        }else{
            sign = "Leo";
        }
        console.log("the output will be " +sign);
    }else if (m == 8) {
        if (d >= 1 && d <= 22)
        {
            sign = "Leo";
        }else{
            sign = "Virgo";
        }
        console.log("the output will be " +sign);
    }else if (m == 9) {
        if (d >= 1 && d <= 22)
        {
            sign = "Virgo";
        }else{
            sign = "Libra";
        }
        console.log("the output will be " +sign);
    }else if (m == 10) {
        if (d >= 1 && d <= 22)
        {
            sign = "Libra";
        }else{
            sign = "Scorpio";
        }
        console.log("the output will be " +sign);
    }else if (m == 11) {
        if (d >= 1 && d <= 21)
        {
            sign = "Scorpio";
        }else{
            sign = "Sagittarius";
        }
        console.log("the output will be " +sign);
    }else if (m == 12) {
        if (d >= 1 && d <= 21) {
            sign = "Sagittarius";
        } else {
            sign = "Capricorn";
        }
        console.log("the output will be " + sign);
    }else{
        console.log("please try again");
    }
}

//run function

zodiac(month,day,year);