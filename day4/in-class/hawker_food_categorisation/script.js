var main = function (input) {
  var outcome = "";
   if(input.length == 0){
    return outcome = "Please enter a Singaporean dish name";
   } else {
    outcome = hawkerFoodCategoryCheck(input);
    return outcome;
  }
};

var hawkerFoodCategoryCheck = function(dishName){
  dishName = dishName.toLowerCase();
  console.log(dishName)
  if (dishName == "chicken rice" || dishName == "nasi lemak"){
    return "It is a rish dish";
  } else if(dishName == "hokkien mee" || dishName == "laksa"){
    return "It is a noodle dish";
  } else {
    return "It is under others, neither a noodle nor a rice dish";
  }
}