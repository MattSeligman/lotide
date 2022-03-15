const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

// Tests to build
// const results1 = map(words, word => word.length);
// console.log(results1);

// assertArraysEqual(
//   eqArrays(
//     map(words, word => word[0]),
//     [ 'g', 'c', 't', 'm', 't' ]
//   )
// );

// assertArraysEqual(
//   eqArrays(
//     map(words, evenLengthWords),
//     [ true, false, true, false, false ]
//   )
// );

// assertArraysEqual(
//   eqArrays(
//     map(words, word => word[0]),
//     [ 'g', 'c', 't', 'm', 't' ]
//   )
// );
