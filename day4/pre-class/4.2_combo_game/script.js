var main = function (input) {
  var outcome = ""
  var dice = rollDice();
  if(isNaN(input)){
      if(input === "palatable papaya"){
        console.log(input)
        return outcome = `You typed ${input}, you win`
      }
      return outcome = oddEvenGame(dice, input)
  }
   return outcome = plusMinusEqual(dice,input);

 
};

var rollDice = function(){
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber
}

var oddEvenGame = function(rollDice, userInput){
      
    if(userInput === "odd"){
        if(rollDice % 2 !== 0){
            return `You win!! You guessed an ${userInput} number and rolled a ${rollDice}`
        }
    }
    if(userInput === "even"){
        if(rollDice % 2 === 0){
            return `You win!! You guessed an ${userInput} number and rolled a ${rollDice}`
        }
    }
    return `You lose!!  You guessed ${userInput} and rolled a ${rollDice}`
}

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
