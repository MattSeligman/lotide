const eqArrays = require('./eqArrays');
const eqObjects = function(object1, object2) {

  const sameLength = object1.length === object2.length;
  const sameType = typeof object1 === typeof object2;
  const sameKeys = eqArrays(Object.keys(object1), Object.keys(object2));
  const sameValues = eqArrays(Object.values(object1), Object.values(object2));
  const sameEntries = eqArrays(Object.entries(object1), Object.entries(object2));
  let result = true;
  
  //basecase
  if (!sameLength || !sameKeys || !sameEntries || !sameValues || !sameType) {
    result = false;
  }

  return result;
};

module.exports = eqObjects;