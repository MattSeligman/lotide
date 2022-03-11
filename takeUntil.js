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


const takeUntil = function(array, callback) {
    
  let takenResults = [];

  for (let ii = 0; ii <= array.length; ii++) {

    if (callback(array[ii])) {

      return takenResults;

    } else {
      takenResults.push(array[ii]);
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);


assertArraysEqual(
  eqArrays(
    results1,
    [ 1, 2, 5, 7, 2 ]
  ));

assertArraysEqual(
  eqArrays(
    results2,
    [ 'I\'ve', 'been', 'to', 'Hollywood' ]
  ));