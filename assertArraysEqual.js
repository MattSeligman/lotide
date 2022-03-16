const eqArrays = require('./eqArrays');

const assertArraysEqual = function(result, expectation) {
            
  if (eqArrays(result , expectation)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertArraysEqual;