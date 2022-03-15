// test/eqArrays.js
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// TEST CODE
console.log('\n assertArraysEqual.js, eqArrays, & middle.js test---');
assertArraysEqual(
  middle([1]),
  [] //returns [] to PASS
);
  
assertArraysEqual(
  middle([1, 2]),  // => []
  []
);
  
assertArraysEqual(
  middle([1, 2, 3]),   // => [2]
  [2]
);
  
assertArraysEqual(
  middle([1, 2, 3, 4, 5]),  // => [3]
  [3]
);
  
assertArraysEqual(
  middle([1, 2, 3, 4]),   // => [2, 3]
  [2, 3]
);
  
assertArraysEqual(
  middle([1, 2, 3, 4, 5, 6]),  // => [3, 4]
  [3, 4]
);
  