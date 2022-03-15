const countLetters = function(word) {

  let letterCount = {};
  let wordNoSpaces = word.split(" ").join("");

  for (let letter of wordNoSpaces) {

    let alreadyCounted = Object.keys(letterCount).includes(letter);

    if (!alreadyCounted) {
      letterCount[letter] = 1;

    } else {

      letterCount[letter]++;

    }
        
  }

  return letterCount;
};

module.exports = countLetters;

// Tests to build

// countLetters("LHL");
// assertEqual(countLetters("ADD"),{A:1,D:2});

// countLetters("lighthouse in the house");

// assertEqual(
//   countLetters("lighthouse in the house"),
//   { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
// );
