var main = function (input) {
  var outcome = fourDGame(input);
  return outcome;
};
//player input a single digit
//computer will generate 4 separate digits in random
//if player guess matches any of the digits, player wins
var generateRandomDigit = function(){
  var digit = Math.floor(Math.random() * 10);
  console.log(digit);
  return digit;
}
var fourDGame = function(input){
    var digit1 = generateRandomDigit();
    var digit2 = generateRandomDigit();
    var digit3 = generateRandomDigit();
    var digit4 = generateRandomDigit();
   

    if(input == digit1 ||
      input == digit2 ||
      input == digit3 ||
      input == digit4 ){
        return `You win! Please see your results\nYour bet: ${input}\n
                First digit: ${digit1}\n
                 Second digit: ${digit2}\n
                  Third digit: ${digit3}\n
                   Fourth digit: ${digit4}\n`
      }
      return `You Lose! Please see your results\n
                Your bet: ${input}\n
                First digit: ${digit1}\n
                 Second digit: ${digit2}\n
                  Third digit: ${digit3}\n
                   Fourth digit: ${digit4}\n`
}