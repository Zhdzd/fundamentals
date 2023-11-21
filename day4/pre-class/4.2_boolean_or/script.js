var main = function (input) {
  var dice = rollDice();
  //var outcome = gameResult(dice,input);
 //var outcome = twoTimesResult(dice,input);
 var outcome = plusMinusEqual(dice,input);
  return outcome;
};

var rollDice = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber
}

//user win if user guessed the correct dice rolled number
var gameResult = function(rollDice, userInput){
    if(userInput == rollDice){
      return `You win!! You guessed ${userInput} and rolled a ${rollDice}`;
    } 
    return `You lose!!  You guessed ${userInput} and rolled a ${rollDice}`;
    
}

//user win if dice roll is 2 times the guess
var twoTimesResult = function(rollDice, userInput){
      if(rollDice == (userInput * 2)){
        return `You win!! You guessed ${userInput} and rolled a ${rollDice}`;
      } 
      return `You lose!!  You guessed ${userInput} and rolled a ${rollDice}`;
}

//user wins if dice rolled value plus, minus and equal to user's guess
var plusMinusEqual = function(rollDice, userInput){
    if((rollDice == (userInput - 1)) ||
       (rollDice == (parseInt(userInput) + 1)) ||
       (rollDice == userInput)) {
        console.log("userInput:", userInput);
        console.log("userInput + 1:", 1 + parseInt(userInput))
        console.log("userInput - 1:", userInput - 1)
        console.log("you win!")
         return `You win!! You guessed ${userInput} and rolled a ${rollDice}`;
    }
      return `You lose!!  You guessed ${userInput} and rolled a ${rollDice}`;
}