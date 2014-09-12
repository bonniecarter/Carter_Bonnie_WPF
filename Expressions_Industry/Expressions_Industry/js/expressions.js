/**
 * Created by Bonnie Carter
 * Sept 11 2014
 * Activity: Industry Expressions
 */

//prompt for webpage size

var webSize = prompt ("To receive a quote for Web Design & Social Media Services, please answer the following questions. \nHow many pages does your website have or need?");

//prompt for social media

var socialMedia = prompt ("How many Social Media sites do you need set up?");

//math time...

var priceWeb = webSize*75;
var priceSocial = socialMedia*50;
var totalPrice = priceWeb+priceSocial;

//output

alert("Thank You for considering Bonnie Carter as your website design & social media firm. Your instant price quote is broken down as such:\n$" +priceWeb+ " for a " +webSize+ " page website. \n$" +priceSocial+ " for the creation or updating of " +socialMedia+ " social media pages.\nYour total quote is $" +totalPrice);

