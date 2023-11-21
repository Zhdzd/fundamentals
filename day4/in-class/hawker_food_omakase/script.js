var main = function (input) {
  var dice = rollDice();
  //var outcome = gameResult(dice,input);
  var outcome = twoTimesResult(dice,input);
  return outcome;
};
