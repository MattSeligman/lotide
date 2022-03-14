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

module.exports = eqArrays;