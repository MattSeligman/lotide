const eqArrays = require('./eqArrays');

const assertArraysEqual = function(result, expectation) {
  
  const success = `✅✅✅ Assertion Passed: ${result} === ${expectation}`;
  const fail = `🛑🛑🛑 Assertion Failed:  ${result} !== ${expectation}`;

  if (eqArrays(result , expectation)) {
    console.log(success);
  } else {
    console.log(fail);
  }
};

module.exports = assertArraysEqual;