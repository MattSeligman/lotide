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

module.exports = assertEqual;