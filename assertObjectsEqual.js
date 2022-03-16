const eqObjects = require('./eqObjects');

const assertObjectsEqual = function(result, expectation) {
  if (eqObjects(result , expectation)) {
    return true;
  } else {
    return false;
  }
};

module.exports = assertObjectsEqual;