const evenLengthWords = (words => {
  
  const wordLength = words.length;
    
  if (wordLength % 2 === 0) {
    return true;
  } else {
    return false;
  }
  
});

module.exports = evenLengthWords;