var main = function (input) {
  var outcome = "Please input a number";
 var dice1 = rollDice();
 var dice2 = rollDice();
  // var dice1 = 1;
  // var dice2 = 1;

  if(input !=""){
  //outcome = twoDiceEqualToGuess(dice1,dice2, input);
  //outcome = winWithinOneforAnyTwoDice(dice1, dice2, input);
  //outcome = winWithinOneforBothDice(dice1, dice2, input);
  //outcome = winWithinOneforAnyTwoDiceButNoSnakeEyes(dice1,dice2,input);
  outcome = winWithinOneforAnyTwoDiceOrSnakeEyes(dice1, dice2, input);
  }
  return outcome;
};

var rollDice = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

//user guess equal to dice 1 and dice 2
//dice is not snake eyes
//snake eyes means -( dice 1 is 1 and dice 2 is 1 ) is not true
var twoDiceEqualToGuess = function(dice1, dice2, userGuess){
  if ((userGuess == dice1) && (userGuess == dice2) && !((dice1 == 1) && dice2 == 1)){
    console.log("win!!")
    return `You win! You guessed ${userGuess}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
  }
   return `You lose! You guessed ${userGuess}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
}

//1.User wins if guess is within 1 for any of 2 dice
var winWithinOneforAnyTwoDice = function(dice1, dice2, userInput){
    if((dice1 == (userInput - 1)) || (dice1 == (Number(userInput) + 1)) || (dice1 == (userInput)) ||
      (dice2 == (userInput - 1)) || (dice2 == (Number(userInput) + 1)) || (dice2 == (userInput))
      ){
        console.log("user input", userInput)
        console.log("dice 1: ", dice1);
        console.log("dice 2: ", dice2);
        console.log("win!");
        return  `You win! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
      }
      return `You lose! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
}
//2.User wins if guess is within 1 for all 2 dices
var winWithinOneforBothDice = function(dice1, dice2, userInput){
    if(((dice1 == (userInput - 1)) || (dice1 == (Number(userInput) + 1)) || (dice1 == (userInput))) &&
      ((dice2 == (userInput - 1)) || (dice2 == (Number(userInput) + 1)) || (dice2 == (userInput)))
      ){
        console.log("user input", userInput)
        console.log("dice 1: ", dice1);
        console.log("dice 2: ", dice2);
        console.log("win!");
        return  `You win! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
      }
      return `You lose! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
}
//3.User wins if guess is within 1 of either dice but the user does not roll snake eyes.
//if user rolls snake eyes, they will lose
var winWithinOneforAnyTwoDiceButNoSnakeEyes = function(dice1, dice2, userInput){
    if(((dice1 == (userInput - 1)) || (dice1 == (Number(userInput) + 1)) || (dice1 == (userInput)) ||
      (dice2 == (userInput - 1)) || (dice2 == (Number(userInput) + 1)) || (dice2 == (userInput))) &&
      !((dice1 == 1) && (dice2 == 1))
      ){
        console.log("user input", userInput)
        console.log("dice 1: ", dice1);
        console.log("dice 2: ", dice2);
        console.log("win!");
        return  `You win! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
      }
      return `You lose! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
}
//4.User wins if guess is within 1 of either dice or if the user rolls snake eyes.
//if user rolls snake eyes, they will win despite their guess not being within range
var winWithinOneforAnyTwoDiceOrSnakeEyes = function(dice1, dice2, userInput){
    if(((dice1 == (userInput - 1)) || (dice1 == (Number(userInput) + 1)) || (dice1 == (userInput)) ||
      (dice2 == (userInput - 1)) || (dice2 == (Number(userInput) + 1)) || (dice2 == (userInput))) ||
      ((dice1 == 1) && (dice2 == 1))
      ){
        console.log("user input", userInput)
        console.log("dice 1: ", dice1);
        console.log("dice 2: ", dice2);
        console.log("win!");
        return  `You win! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
      }
      return `You lose! You guessed ${userInput}, first dice rolls a ${dice1} and second dice rolls a ${dice2}`;
}