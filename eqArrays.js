const assertEqual = function(actual, expected) {

  const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
          
  if (actual === expected) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
        
};

const eqArrays = function(arrayOne, arrayTwo) {

  const arrayOneLength = arrayOne.length;
  const arrayTwoLength = arrayTwo.length;

  let result = false;
    
  // Check the Length of Arrays
  if (arrayOneLength === arrayTwoLength) {

    for (let i = 0; i < arrayOneLength; i++) {

      if (arrayOne[i] === arrayTwo[i]) {
                
        result = true;
      } else {
        result = false;
      }
    }

  } else {
    result = false;
  }

  console.log(result);
  return result;

};

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 1]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS