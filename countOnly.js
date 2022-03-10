const assertEqual = function(actual, expected) {

  const errorMsg = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  const successMsg = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
        
  if (actual === expected) {
    console.log(successMsg);
  } else {
    console.log(errorMsg);
  }
      
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {

  const itemsToCountKeys = Object.keys(itemsToCount);

  let itemCount = {};

  for (let item in allItems) {

    if (itemsToCountKeys.includes(allItems[item])) {
            
      // Check if the Object itemCount doesn't contain the item yet.
      // && Check if the item's value is true in the itemsToCount object
      if (!Object.keys(itemCount).includes(allItems[item]) && (itemsToCount[allItems[item]])) {

        // Set the itemCount to 1
        itemCount[allItems[item]] = 1;
           
      } else if (itemsToCount[allItems[item]]) {

        // Increment the itemCount item's value
        itemCount[allItems[item]]++;

      }
    }
  }

  return itemCount;

};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
 
const objectName =  { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

countOnly(firstNames, objectName);

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);