var main = function (input) {
  var outcome = "";
  if(isNaN(Number(input))){
    return outcome = validationMessageNan();
  }
  if(!(input >= 1 && input <=6)){
    return outcome = validationMessageInvalidNumber();
  }
  // var dice1 = rollDice();
  // var dice2 = rollDice();
  var dice1 = 7;
  var dice2 = 4;

  var firstWinCriteria = winIfEitherDiceRollMatchGuess(dice1, dice2, input);
  var secondWinCriteria = winIfTotalDiceRollIs11(dice1, dice2);
  if(firstWinCriteria || secondWinCriteria){
    return outcome = `You win!!! Dice1 rolled a ${dice1}, Dice2 rolled a ${dice2}`
  }
  return outcome =  `You lose!!! Dice1 rolled a ${dice1}, Dice2 rolled a ${dice2}`;
};

var validationMessageNan = function(){
      return `You entered an invalid input. Please enter a number`;
}
var validationMessageInvalidNumber = function(){
  return "Please enter a number between 1 to 6";
}

var rollDice = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber
}

//user win if user guessed the correct dice rolled number
// var gameResult = function(rollDice, userInput){
//     if(userInput == rollDice){
//       return `You win!! You guessed ${userInput} and rolled a ${rollDice}`;
//     } 
//     return `You lose!!  You guessed ${userInput} and rolled a ${rollDice}`;
    
// }
//One of the dice roll matches their guess, or
//If the total dice roll is 11.
var winIfEitherDiceRollMatchGuess = function(dice1, dice2, userInput){
    var userInputInt = Number(userInput);
    if((dice1 == userInputInt) || (dice2 == userInput)){
      return true;
    }
    return false;
}
var winIfTotalDiceRollIs11 = function (dice1, dice2){
      var sum = dice1 + dice2;
      if(sum == 11){
        return true;
      }
      return false;
}