// User enter a max number an dthen tries to guess a random geenrated number between 1 to max
const max=prompt("Enter the max number");

const random =Math.floor(Math.random()*max)+1;

let guess=prompt("Guess the number");

while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        console.log("You are right!! congrats!! random number was",random);
        break;
    }
    else if(guess<random){
        guess=prompt("hint:Your guess was too small.please try again");
    }
    else{
        guess=prompt("hint:YOur guess was too large.Please try again");
    }
    // else{
    //     guess= prompt("your guess was wrong. Please try again") ;
    // }
}
