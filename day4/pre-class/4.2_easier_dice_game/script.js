var main = function (input) {
  var dice = rollDice();
  var outcome = plusMinusEqual(dice,input);
  return outcome;
};

var rollDice = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber
}
//user wins if dice rolled value plus, minus and equal to user's guess
var plusMinusEqual = function(rollDice, userInput){
    if((rollDice == (userInput - 1)) ||
       (rollDice == (parseInt(userInput) + 1)) ||
       (rollDice == (userInput - 2)) ||
       (rollDice == (parseInt(userInput) + 2)) ||
       (rollDice == userInput)) {
         return `You win!! You guessed ${userInput} and rolled a ${rollDice}`;
    }
      return `You lose!!  You guessed ${userInput} and rolled a ${rollDice}`;
}