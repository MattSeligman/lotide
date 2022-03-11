// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
    const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
      
    if (actual === expected) {
      console.log(successMsg);
    } else {
      console.log(errorMsg);
    }
    
};

const findKey = function(object, callback) {
 
    for (let key in object) {
        
        if(callback(object[key])){
           console.log(key);
           return key;
        }
    }
      
};

findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"

  assertEqual(
    findKey({
        "Blue Hill": { stars: 1 },
        "Akaleri":   { stars: 3 },
        "noma":      { stars: 2 },
        "elBulli":   { stars: 3 },
        "Ora":       { stars: 2 },
        "Akelarre":  { stars: 3 }
      }, x => x.stars === 2),
      "noma"
    );