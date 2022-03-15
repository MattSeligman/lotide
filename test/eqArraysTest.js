// test/eqArrays.js
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
console.log('\n assertEqual.js & eqArrays.js test---');
eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [1, 2, 1]);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 1]), false); // => should FAIL