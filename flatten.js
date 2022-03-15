const flatten = function(array) {

  let flattenedArray = [];

  for (let value in array) {

    if (!Array.isArray(array[value])) {

      flattenedArray.push(array[value]);

    } else if (Array.isArray(array[value])) {

      for (let subValue in array[value]) {

        flattenedArray.push(array[value][subValue]);
      }
            
    }
        
  }

  return flattenedArray;
};

module.exports = flatten;

// Tests to build
// flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

// assertArraysEqual(eqArrays(flatten([1, 2, [3, 4], 5, [6]]) , [ 1, 2, 3, 4, 5, 6 ]), true); //Test to Pass