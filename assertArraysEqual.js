const eqArrays = require('./eqArrays');

const assertArraysEqual = function(result, expectation) {

  const errorMsg = `🛑🛑🛑 Assertion Failed | ${result} (Arrays are not Equal)`;
  const successMsg = `✅✅✅ Assertion Passed | ${result} (Arrays are Equal)`;
            
  if (eqArrays(result , expectation)) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
};

module.exports = assertArraysEqual;