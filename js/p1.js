var fname = prompt("What is first name");
var lname = prompt("What is last name");
 var age = prompt("How old are you");

console.log("Your name is " + fname + " " + lname);
console.log("You are " + age);


alert("Your name is " + fname + " " + lname);
alert("You are " + age);
var days = age*365
alert("You are " + days + " days old")

if (age < 18){
    console.log("You cannot enter")
}

else if (age<21){
    console.log("You can enter but not drink")
}

else{
    console.log("You can enter and drink")
}

if (age<0){
    console.log("Error")
}
if(age==21){
    console.log("happy 21st")
}

if (age%2==1){
    console.log("You birthday is odd")
}

if (Math.sqrt(age)%1==0){
    console.log("Your age is a perfect square")
}
