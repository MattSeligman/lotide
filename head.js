const assertEqual = function(actual, expected) {

  const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
      
  if (actual === expected) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
    
};

const head = function(array) {
  return array[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), "Hello");