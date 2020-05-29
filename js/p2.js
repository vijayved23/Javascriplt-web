var secretNumber = 7;
guess = prompt("Guess a number from 1 - 10")
if(guess == secretNumber){
    alert("You guessed it")
}

else if(guess > secretNumber){
    alert("Guess Lower")
}

if(guess < secretNumber){
    alert("Guess Higher")
}

var num = -10

while(num <= 19){
    console.log(num)
    num++
}

var num2 = 10;
while(num2 <= 40){
    console.log(num2)
    num2+=2
}

var num3 = 5
while(num3<=50){
   if(num3 % 3 == 0 && num3 % 5 == 0){
        console.log(num3)
    }
    num3+=1
}

For Loops

for(var i=-10;i<=19;i++){
    console.log(i);
}

for(var i=10;i<=40;i+=2){
    console.log(i);
}

for(var i=5;i<=50;i++){
    if(i%3==0 && i%5==0){
        console.log(i)
    }
}