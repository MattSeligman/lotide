const assertEqual = function(actual, expected) {

  const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
          
  // Had to improve the Object Comparison (will have to re-apply to all past projects to confirm works smoothly)
  if (Object.entries(actual).toString() === Object.entries(expected).toString()) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
        
};

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

countLetters("LHL");
assertEqual(countLetters("ADD"),{A:1,D:2});

countLetters("lighthouse in the house");

assertEqual(
  countLetters("lighthouse in the house"),
  { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 }
);
