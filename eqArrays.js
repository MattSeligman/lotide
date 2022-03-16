const flatten = require('./flatten');

const eqArrays = function(arrayOne, arrayTwo) {

  
  const firstArray = flatten(arrayOne);
  const secondArray = flatten(arrayTwo);
  const sameLength = arrayOne.length === arrayTwo.length;
  
  if (!sameLength) {
    return false;
  }
  
  if (firstArray.join("") === secondArray.join("")) {
    return true;
  } else {
    return false;
  }

};

module.exports = eqArrays;