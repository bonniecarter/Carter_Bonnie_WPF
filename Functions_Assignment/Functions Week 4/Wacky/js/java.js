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

    return sign;
}

//run function

var signOutput = zodiac(month,day,year);

    if (year == "2008" || year == "1996" || year == "1984" || year == "1972" || year == "1960" || year == "1948" || year == "1936" || year == "1924" || year == "1912" || year == "1900") {
        alert ("you were born in the year of the rat & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the rat & your zodiac sign is " +signOutput);
    }else if (year == "1901" || year == "1913" || year == "1925" || year == "1937" || year == "1949" || year == "1961" || year == "1973" || year == "1985" || year == "1997" || year == "2009") {
        alert ("you were born in the year of the ox & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the ox & your zodiac sign is " +signOutput);
    }else if (year == "1902" || year == "1914" || year == "1926" || year == "1938" || year == "1950" || year == "1962" || year == "1974" || year == "1986" || year == "1998" || year == "2010"){
        alert ("you were born in the year of the tiger & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the tiger & your zodiac sign is " +signOutput);
    }else if (year == "1903" || year == "1915" || year == "1927" || year == "1939" || year == "1951" || year == "1963" || year == "1975" || year == "1987" || year == "1999" || year == "2011"){
        alert ("you were born in the year of the rabbit & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the rabbit & your zodiac sign is " +signOutput);
    }else if (year == "1904" || year == "1916" || year == "1928" || year == "1940" || year == "1952" || year == "1964" || year == "1976" || year == "1988" || year == "2000" || year == "2012"){
        alert ("you were born in the year of the dragon & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the dragon & your zodiac sign is " +signOutput);
    }else if (year == "1905" || year == "1917" || year == "1929" || year == "1941" || year == "1953" || year == "1965" || year == "1977" || year == "1989" || year == "2001" || year == "2013"){
        alert ("you were born in the year of the snake & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the snake & your zodiac sign is " +signOutput);
    }else if (year == "1906" || year == "1918" || year == "1930" || year == "1942" || year == "1954" || year == "1966" || year == "1978" || year == "1990" || year == "2002" || year == "2014"){
        alert ("you were born in the year of the horse & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the horse & your zodiac sign is " +signOutput);
    }else if (year == "1907" || year == "1919" || year == "1931" || year == "1943" || year == "1955" || year == "1967" || year == "1979" || year == "1991" || year == "2003" || year == "2015"){
        alert ("you were born in the year of the sheep & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the sheep & your zodiac sign is " +signOutput);
    }else if (year == "1908" || year == "1920" || year == "1932" || year == "1944" || year == "1956" || year == "1968" || year == "1980" || year == "1992" || year == "2004" || year == "2016"){
        alert ("you were born in the year of the monkey & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the monkey & your zodiac sign is " +signOutput);
    }else if (year == "1909" || year == "1921" || year == "1933" || year == "1945" || year == "1957" || year == "1969" || year == "1981" || year == "1993" || year == "2005" || year == "2017"){
        alert ("you were born in the year of the rooster & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the rooster & your zodiac sign is " +signOutput);
    }else if (year == "1910" || year == "1922" || year == "1934" || year == "1946" || year == "1958" || year == "1970" || year == "1982" || year == "1994" || year == "2006" || year == "2018"){
        alert ("you were born in the year of the dog & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the dog & your zodiac sign is " +signOutput);
    }else if (year == "1911" || year == "1923" || year == "1935" || year == "1947" || year == "1959" || year == "1971" || year == "1983" || year == "1995" || year == "2007" || year == "2019"){
        alert ("you were born in the year of the pig & your zodiac sign is " +signOutput);
        console.log("you were born in the year of the pig & your zodiac sign is " +signOutput);
    }else{
        alert("try again")}