/*
How many hours did you spend on this assignment?: 3

What part of the assignment did you spend the most time on?: getting the game mode right and the input validation

How comfortable did you feel with this assignment? (1-5): 3

Is there anything in this code that you feel pleased about?: I am pleased with having nested functions to separate the logic that makes it easier to debug, edit and read

What's one aspect of your code you would like specific, elaborate feedback on?: How i can improve on my code in terms of logic. Eg. better way to write gameResult and reverseSPS function.

*/
//global variables
var userWin = 0;
var userLoss = 0;
var totalGames = 0;
var gameState = "";
var userName = "";


//output messages
function SPSMessage(){
    return  `Classic SPS! Enter scissors, paper or stone.`
}
function reverseSPSMessage(){
    return  `Reverse SPS! Enter scissors, paper or stone.`
}
//msg for choosing game mode
function userChooseGameMode(name){
  return `Hello ${name}! <br><br>
          Welcome to the game of Scissors Paper Stone! &#9996 &#129306 &#9994 <br><br>
          Enter 1 or 2 to choose game<br><br>
          1. Classic Scissors Paper Stone<br><br>
          2. Reverse Scissors Paper Stone
        `
}

//win/lose rates
function winningPercentage(wins){
    var winningRate = (userWin / totalGames) * 100
    return `(${winningRate.toFixed(1)})%`
}
function losingPercentage(losses){
    var losingRate = (losses / totalGames) * 100;
    return `(${losingRate.toFixed(1)})%`
}

//validation for sps input
function validationSPS(inputValidation){
    var choice = inputValidation.toLowerCase();
    if(choice == "scissors" || choice == "paper" || choice == "stone"){
      return true;
    }
      return false;
}
//logic for random num & comp choice
function generateRandomNum(){
  return Math.floor(Math.random() *3) + 1
}

function computerChoice(){
    var rand = generateRandomNum();
    console.log("rand", rand);
    switch(rand){
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'stone';
            break;
        default:
            return 'error, pls check computer choice function';
            break;
    }
}

//logic for normal SPS
function gameResult(user, computer){
      //winning conditions
      console.log("userchoice: ", userChoice);
      console.log("pc: ", computer);

      totalGames++;
      var userChoice = user.toLowerCase();
      var winRate = winningPercentage(userWin);
      var loseRate = losingPercentage(userLoss);
   
      if((userChoice == 'scissors') && (computer == 'paper') ||
          (userChoice == 'paper') && (computer == 'stone') ||
          (userChoice == 'stone') && (computer == 'scissors') 
      ){
          userWin++;
          winRate = winningPercentage(userWin);
          loseRate = losingPercentage(userLoss);
          return `Comp: ${computer} . <br>
                  ${userName}: ${userChoice}<br><br>
                  You win!<br><br>
                  Total rounds played: ${totalGames}<br>
                  Wins: ${userWin} ${winRate}<br>
                  Losses: ${userLoss} ${loseRate}<br><br>
                  Now you can type "scissors", "paper" or "stone" to play another round!`
      } else if( userChoice == computer){
            winRate = winningPercentage(userWin);
            loseRate = losingPercentage(userLoss);
          return `Comp: ${computer} . <br>
                  ${userName}: ${userChoice}<br><br>
                  It's a draw!<br><br>
                  Total rounds played: ${totalGames}<br>
                  Wins: ${userWin} ${winRate}<br>
                  Losses: ${userLoss} ${loseRate}<br><br>
                  Now you can type "scissors", "paper" or "stone" to play another round!`;
      } else {
          userLoss++;
          winRate = winningPercentage(userWin);
          loseRate = losingPercentage(userLoss);
        
          return `Comp: ${computer} . <br>
                  ${userName}: ${userChoice}<br><br>
                  You lose!<br><br>
                  Total rounds played: ${totalGames}<br>
                  Wins: ${userWin} ${winRate}<br>
                  Losses: ${userLoss} ${loseRate}<br><br>
                  Now you can type "scissors", "paper" or "stone" to play another round!`;
      }
}
//logic for reverse sps
function reverseGame(user, computer){
      totalGames++;
      var userChoice = user.toLowerCase();
      var winRate = winningPercentage(userWin);
      var loseRate = losingPercentage(userLoss);

      if((userChoice == 'scissors') && (computer == 'paper') ||
          (userChoice == 'paper') && (computer == 'stone') ||
          (userChoice == 'stone') && (computer == 'scissors') 
      ){
          userLoss++;
          winRate = winningPercentage(userWin);
          loseRate = losingPercentage(userLoss);
          return `Reverse SPS!<br><br>
                Comp: ${computer} . <br>
                ${userName}: ${userChoice}<br><br>
                You lose!<br><br>
                Total rounds played: ${totalGames}<br>
                Wins: ${userWin} ${winRate}<br>
                Losses: ${userLoss} ${loseRate}<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      } else if( userChoice == computer){
          return `Reverse SPS!<br><br>
                Comp: ${computer} . <br>
                 ${userName}: ${userChoice}<br><br>
                It's a draw!<br><br>
                Total rounds played: ${totalGames}<br>
                Wins: ${userWin} ${winRate}<br>
                Losses: ${userLoss} ${loseRate}<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      } else {
           userWin++;
           winRate = winningPercentage(userWin);
           loseRate = losingPercentage(userLoss);
           return `Reverse SPS!<br><br>
                 Comp: ${computer} . <br>
                 ${userName}: ${userChoice}<br><br>
                You win!<br><br>
                Total rounds played: ${totalGames}<br>
                Wins: ${userWin} ${winRate}<br>
                Losses: ${userLoss} ${loseRate}<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      }
      
 }
//logic for main flow of the game
function startGame(input){
      var myOutputValue = "";
      var isSpsValid = validationSPS(input);
      if(!userName){
        if(!input){
            return `Invalid input. Please enter your name`;
        }
        userName = input;
        return userChooseGameMode(input);
      }
      if(!gameState){
          if(input == 1){
              gameState = "sps";
              return SPSMessage()
          }
          if(input == 2){
            gameState = "reverse"
            return reverseSPSMessage();
          } 
          if(input!=1 || input !=2){
            return `Invalid input.<br><br> Enter 1 for normal SPS<br><br> Enter 2 for reverse SPS`
          }
      }

      if(gameState == "sps" && isSpsValid){
            var inputLowCaps = input.toLowerCase();
            var comp = computerChoice();
            myOutputValue = gameResult(input, comp);
      }else if(gameState == "reverse" && isSpsValid){
            console.log(">> test 2")
            var inputLowCaps = input.toLowerCase();
            var comp = computerChoice();
            myOutputValue = reverseGame(input, comp);
      } else {
            myOutputValue = `Invalid input. Please input either scissors, paper or stone.<br><br> &#9996 &#129306 &#9994 <br><br>Thank you.`;
      }
      return myOutputValue;
}

/* Main */
var main = function (input) {
    return startGame(input);
};

