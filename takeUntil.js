const takeUntil = function(array, callback) {
    
  let takenResults = [];

  for (let ii = 0; ii <= array.length; ii++) {

    if (callback(array[ii])) {

      return takenResults;

    } else {
      takenResults.push(array[ii]);
    }
  }
};

module.exports = takeUntil;

// Tests to build
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);


// assertArraysEqual(
//   eqArrays(
//     results1,
//     [ 1, 2, 5, 7, 2 ]
//   ));

// assertArraysEqual(
//   eqArrays(
//     results2,
//     [ 'I\'ve', 'been', 'to', 'Hollywood' ]
//   ));