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