var main = function (input) {
   var result = fourDResult(input);
   return result;
};

//generate 4digit random numer
function generate4DNumber(){
   return Math.floor(Math.random() * 9999) + 1;
}
//win if player guess within 1000
function fourDResult(playerNum){
    var winingNum = generate4DNumber();
    var lowerRange = winingNum - 1000;
    var upperRange = winingNum + 1000;
    if(playerNum < lowerRange || playerNum > upperRange){
      return `You lose! Your guess: ${playerNum}, winning number is ${winingNum}`;
    }
     return `You win! Your guess: ${playerNum}, winning number is ${winingNum}`;
}