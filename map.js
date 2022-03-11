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
  
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

// const results1 = map(words, word => word.length);
// console.log(results1);

let evenLengthWords = (words => {
  
  const wordLength = words.length;
  
  if (wordLength % 2 === 0) {
    return true;
  } else {
    return false;
  }

});

assertArraysEqual(
  eqArrays(
    map(words, word => word[0]),
    [ 'g', 'c', 't', 'm', 't' ]
  )
);

assertArraysEqual(
  eqArrays(
    map(words, evenLengthWords),
    [ true, false, true, false, false ]
  )
);

assertArraysEqual(
  eqArrays(
    map(words, word => word[0]),
    [ 'g', 'c', 't', 'm', 't' ]
  )
);
