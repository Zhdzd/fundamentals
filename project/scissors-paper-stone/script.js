//user input scissors, paper or stone
//program will randomly choose scissors paper or stone
//output whether user win, program win or its a draw

/*Rules: 
scissors beats paper
paper beats stone
stone beats scissors

if both choose same object, it is a draw
*/

var main = function (input) {
  var myOutputValue = "";
  var inputLowCaps = input.toLowerCase();
  
  if((inputLowCaps.includes("reverse"))){
        myOutputValue = reverseGame(input, "scissors");
  } else if(!(inputLowCaps == "scissors" ||
              inputLowCaps == "paper" ||
              inputLowCaps == "stone") ){
            myOutputValue= validationMessage();
  } else {
        myOutputValue = gameResult(input, "scissors");
  }


  // if(!(inputLowCaps == "scissors" ||
  //     inputLowCaps == "paper" ||
  //     inputLowCaps == "stone") ){
  //       myOutputValue= validationMessage();
  //     } else {
  //          var comp = computerChoice();
  //         //var comp = 'stone'
  //          //myOutputValue = gameResult(input, "scissors");
  //          myOutputValue = reverseGame(input, "scissors");
  //     }
 

  return myOutputValue;
};

function validationMessage(){
  return  `Invalid input. Please input either scissors, paper or stone.<br><br> &#9996 &#129306 &#9994 <br><br>Thank you.`;
}
//generate a random number
//function is tested successfully
function generateRandomNum(){
  return Math.floor(Math.random() *3) + 1
}

//use random number function to generate program choice
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

function gameResult(user, computer){
      var userChoice = user.toLowerCase();
      //winning conditions
      console.log("userchoice: ", userChoice);
      console.log("pc: ", computer);
    
      if((userChoice == 'scissors') && (computer == 'paper') ||
          (userChoice == 'paper') && (computer == 'stone') ||
          (userChoice == 'stone') && (computer == 'scissors') 
      ){
        
        return `The computer choose: ${computer} . <br>
                You choose: ${userChoice}<br><br>
                You win!<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`
      } else if( userChoice == computer){
        return `The computer choose: ${computer} . <br>
                You choose: ${userChoice}<br><br>
                It's a draw!<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      } else {
        return `The computer choose: ${computer} . <br>
                You choose: ${userChoice}<br><br>
                You lose!<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      }
}
function generateIcons(object){
    if(object == 'scissors'){
      return "&#9988";
    }
    if(object == 'paper'){
      return "&#9995";
    }
    if(object == 'stone'){
      return "&#9994"
    }
  }

  /*Reverse game
  - rules are reversed if inputs "reversed stone", "reversed      paper" or reversed stone
  - scissors beat stone
  - stone beats paper
  - paper beats scissors
  */
 function reverseGame(user, computer){
      var normalGameResult = gameResult(user, computer);
      if(normalGameResult.includes("win")){
        return `Reverse SPS!<br><br>
                The computer choose: ${computer} . <br>
                You choose: ${user}<br><br>
                You lose!<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      } else if(normalGameResult.includes("lose")){
          return `Reverse SPS!<br><br>
                The computer choose: ${computer} . <br>
                You choose: ${user}<br><br>
                You win!<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`
      } else {
          return `Reverse SPS!<br><br>
                The computer choose: ${computer} . <br>
                You choose: ${user}<br><br>
                It's a draw!<br><br>
                Now you can type "scissors", "paper" or "stone" to play another round!`;
      }
 }
