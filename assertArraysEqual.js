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

  return result;
  
};
  
const assertArraysEqual = function(result) {

  const errorMsg = `🛑 The arrays are not equal 🛑`;
  const successMsg = `✅ The arrays are Equal ✅`;
            
  if (result) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 1]));