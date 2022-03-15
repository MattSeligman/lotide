const findKeyByValue = function(object, value) {
 
  for (let key in object) {
       
    if (object[key] === value) {

      return key;
    }

  }
    
};

module.exports = findKeyByValue;

// Tests to build
// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);