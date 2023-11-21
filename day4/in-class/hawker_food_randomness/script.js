var main = function (input) {
  var result = isCustomerGuessCorrect(input);
  if(result){
    return "You guess correctly. You get a free meal!";
  }
  return "Better luck next time!";
};

//generate random number for hawker dish 
//6 dishes
function generateRandomNumber (){
    var randNum = Math.floor(Math.random() * 6) + 1;
    console.log(randNum)
    return randNum;
}
function generateRandDish(){
    var randNum = generateRandomNumber();
    switch(randNum){
        case 1:
            return 'chicken rice';
            break;
        case 2:
            return 'roti prata';
            break;
        case 3:
            return 'nasi lemak';
            break;
        case 4:
            return 'hokkien mee';
            break;
        case 5:
            return 'bak kut teh';
            break;
        case 6:
            return 'laksa';
            break;
        default:
           return 'error';
           break;

    }
}
function isCustomerGuessCorrect(dishName){
    var customerGuess = dishName.toLowerCase();
    var dishGenerated = generateRandDish();
    console.log("cust guess: ", customerGuess);
    console.log("generated dish: ", dishGenerated);
    if(dishGenerated ==  customerGuess){
        return true;
    }
    return false;
}