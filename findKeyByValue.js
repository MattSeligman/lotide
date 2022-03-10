// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
        
  if (actual === expected) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }

};

const findKeyByValue = function(object, value) {
 
  for (let key in object) {
       
    if (object[key] === value) {

      return key;
    }

  }
    
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);