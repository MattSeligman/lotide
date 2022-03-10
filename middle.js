const eqArrays = function(arrayOne, arrayTwo) {
  
  const arrayOneLength = arrayOne.length;
  const arrayTwoLength = arrayTwo.length;
    
  let result = false;

  // added if both array's are empty to mark true
  if (arrayOneLength === 0 && arrayTwoLength === 0) {

    result = true;

  } else if (arrayOneLength === arrayTwoLength) {
    
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
  
const middle = function(array) {
    
  const arrayLength = array.length;

  let result = [];

  // For arrays with one or two elements, there is no middle. Return an empty array.
  if (arrayLength <= 2) {
        
    return result;
        

  } else {
       
    const isOdd = arrayLength % 2 !== 0;
        
    // For arrays with odd number of elements, an array containing a single middle element should be returned.
    if (isOdd) {

      // midpoint calculation
      // Step 1: Add the first and last number of the range together.
      const edgeSum = parseInt(array[0]) + parseInt(array[arrayLength - 1]);

      // Step 2: Divide the total by 2 to get the Half value (middle)
      // Then we push it to the result array return.
      result.push(edgeSum / 2);
    
      // For arrays with an even number of elements, an array containing the two elements in the middle should be returned
    } else {
            
      // midpoint calculation (will end up as a decimal this time)
      // Step 1: Add the first and last number of the range together.
      const edgeSum = parseInt(array[0]) + parseInt(array[arrayLength - 1]);

      // Step 2: Divide the total by 2 to get the Half value (middle)
      // Then we push it to the result array return.
      const resultValue = edgeSum / 2;

      // Step 3: Lets grab both the floor and ceil from this result and place as two results :)
      const resultOne = Math.floor(resultValue);
      const resultTwo = Math.ceil(resultValue);
      result.push(resultOne,resultTwo);
    }

  }

  return result;
    
};

middle([1]); // => []
middle([1, 2]); // => []

middle([1, 2, 3]); // => [2]
middle([1, 2, 3, 4, 5]); // => [3]

middle([1, 2, 3, 4]); // => [2, 3]
middle([1, 2, 3, 4, 5, 6]); // => [3, 4]

assertArraysEqual(
  eqArrays(
    middle([1]),
    [] //returns [] to PASS
  )
);

assertArraysEqual(
  eqArrays(
    middle([1, 2]),  // => []
    []
  )
);

assertArraysEqual(
  eqArrays(
    middle([1, 2, 3]),   // => [2]
    [2]
  )
);

assertArraysEqual(
  eqArrays(
    middle([1, 2, 3, 4, 5]),  // => [3]
    [3]
  )
);

assertArraysEqual(
  eqArrays(
    middle([1, 2, 3, 4]),   // => [2, 3]
    [2, 3]
  )
);

assertArraysEqual(
  eqArrays(
    middle([1, 2, 3, 4, 5, 6]),  // => [3, 4]
    [3, 4]
  )
);
