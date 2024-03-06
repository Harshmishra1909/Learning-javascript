const max = prompt("Enter the max number");
const random = Math.floor(Math.random()*max)+1;
let guess= prompt("guess the number");

while(true){
    if(guess=="quit"){
        console.log("user quit");
        break;
    }
    if(guess == random){
       console.log("Your ans is right!!");
       break;
    }
    else if(guess < random){
        guess=prompt("hint : Your number is too small!! ,plz try again");
    }
    else{
        guess=prompt("Your ans is to large!! plz try again");
    }
}