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

const without = function(source, itemsToRemove) {

  for (let value in itemsToRemove) {

    if (source.includes(itemsToRemove[value])) {

      let sourceValueIndex = source.indexOf(itemsToRemove[value]);

      source.splice(sourceValueIndex, 1);
    }

  }

  console.log(source);
  return source;
};

without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

console.log("Test Cases below");
assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3])); // Exists, and Removed (PASS)
assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])); // Exists, and Removed (PASS)
assertArraysEqual(eqArrays(without([1, 2, 3], []), [1, 2, 3])); // Item to Remove not provided so no need to Remove (PASS)
assertArraysEqual(eqArrays(without(["1", "2", "3"], [5, 6, 7]), ["1", "2", "3"])); // Item doesn't exist so no need to Remove (PASS)