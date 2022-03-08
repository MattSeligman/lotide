const assertEqual = function(actual, expected) {

  const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
        
  if (actual === expected) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
      
};

const tail = function(array) {
  const arrayCopy = [...array];
  return arrayCopy.splice(0);
};

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!