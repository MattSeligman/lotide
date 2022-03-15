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
      
const assertArraysEqual = function(result, expectation) {
    
  const errorMsg = `🛑 The arrays are not equal 🛑`;
  const successMsg = `✅ The arrays are Equal ✅`;
                
  if (result, expectation) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
};
  
const flatten = function(array) {

  let flattenedArray = [];

  for (let value in array) {

    if (!Array.isArray(array[value])) {

      flattenedArray.push(array[value]);

    } else if (Array.isArray(array[value])) {

      for (let subValue in array[value]) {

        flattenedArray.push(array[value][subValue]);
      }
            
    }
        
  }

  return flattenedArray;
};

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]) , [ 1, 2, 3, 4, 5, 6 ]), true); //Test to Pass