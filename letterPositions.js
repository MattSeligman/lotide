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


const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  // Remove the spaces
  const sentanceNoSpaces = sentence.split("").join("");

  // Setup as Array (so we can use the index's)
  const sentanceArray = sentanceNoSpaces.split("");

  for (let letter in sentanceArray) {

    let alreadyCounted = Object.keys(results).includes(sentanceArray[letter]);

    if (sentanceArray[letter] === ' ') {
      // Skip
    } else if (alreadyCounted) {
      results[sentanceArray[letter]].push(letter);
    } else {
      results[sentanceArray[letter]] = [letter];
    }

  }

  console.log(results, "\n");
  return results;
};

letterPositions("test");

letterPositions("lighthouse in the house");

assertArraysEqual(eqArrays(
  letterPositions("lighthouse in the house"),
  { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }
));
