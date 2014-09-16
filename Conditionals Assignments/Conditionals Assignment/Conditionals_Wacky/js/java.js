/**
 * Created by Bonnie Carter
 * Created on 09.16.14
 * Assignment Conditional Wacky
 * Which room to clean
 */

var smell = prompt("Do any of the rooms smell bad? \nPlease answer yes or no.");

if (smell=="yes"){
    alert("Please clean that room first and hit ok when you are done.")
}else{
    var bedroom = prompt("Oh Good! Have you changed your sheets lately?")
    if (bedroom == "no"){
        alert("Please clean your bedroom first, start at the top and work your way down!")
    }else{
        alert("Start with your bedroom anyway! You sleep there, then move to your kitchen and to your parlor next.")
    }
}
if (smell="yes"){
    alert("Next, please clean the other rooms one by one until things no longer need febreeze!")
}else{
}

alert("Nap Time")