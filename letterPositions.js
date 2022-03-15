const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here

  // Remove the spaces
  const sentanceNoSpaces = sentence.split("").join("");

  // Setup as Array (so we can use the index's)
  const sentanceArray = sentanceNoSpaces.split("");

  for (let letter in sentanceArray) {

    let alreadyCounted = Object.keys(results).includes(sentanceArray[letter]);

    if (sentanceArray[letter] === ' ') {
      // Skip
    } else if (alreadyCounted) {
      results[sentanceArray[letter]].push(letter);
    } else {
      results[sentanceArray[letter]] = [letter];
    }

  }

  console.log(results, "\n");
  return results;
};

module.exports = letterPositions;

// Tests to build
// letterPositions("test");

// letterPositions("lighthouse in the house");

// assertArraysEqual(eqArrays(
//   letterPositions("lighthouse in the house"),
//   { l: [0], i: [1, 11], g: [2], h: [3, 5, 15, 18], t: [4, 14], o: [6, 19], u: [7, 20], s: [8, 21], e: [9, 16, 22], n: [12] }
// ));
