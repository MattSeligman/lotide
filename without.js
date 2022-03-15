const without = function(source, itemsToRemove) {

  for (let value in itemsToRemove) {

    if (source.includes(itemsToRemove[value])) {

      let sourceValueIndex = source.indexOf(itemsToRemove[value]);

      source.splice(sourceValueIndex, 1);
    }

  }

  return source;
};

module.exports = without;

// Tests to build
// without([1, 2, 3], [1]); // => [2, 3]
// without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]

// console.log("Test Cases below");
// assertArraysEqual(eqArrays(without([1, 2, 3], [1]), [2, 3])); // Exists, and Removed (PASS)
// assertArraysEqual(eqArrays(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])); // Exists, and Removed (PASS)
// assertArraysEqual(eqArrays(without([1, 2, 3], []), [1, 2, 3])); // Item to Remove not provided so no need to Remove (PASS)
// assertArraysEqual(eqArrays(without(["1", "2", "3"], [5, 6, 7]), ["1", "2", "3"])); // Item doesn't exist so no need to Remove (PASS)