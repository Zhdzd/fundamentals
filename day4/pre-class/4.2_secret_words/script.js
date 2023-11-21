var main = function (input) {
  var outcome = revealMessage(input);
  return outcome;
};
//program will output the secret msg if input is True
var revealMessage = function(userInput){
    if(secretMessage(userInput)){
      return 'you wrote the secret phrase'
    }
    return 'hello world';
}
//if user enters  "neat noodles", "awesome ayam", "delicious dumplings" or the original word 

var secretMessage = function(userInput){
  if((userInput === "neat noodles") ||
      (userInput === "awesome ayam") ||
      (userInput === "delicious dumplings") ||
      (userInput === "palatable papaya")
   ){
    return true;
   }
}