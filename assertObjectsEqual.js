const eqObjects = function(object1, object2) {

  const object1Length = object1.length;
  const object2Length = object2.length;
  
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  
  const object1Values = Object.values(object1);
  const object2Values = Object.values(object2);
  
  let result = false;
  
  // check the object lengths
  if (object1Length === object2Length) {
  
    // loop through the object2Keys
    for (let key in object2Keys) {
  
      if (typeof object1Values[key] === 'object' && typeof object2Values[key] === 'object') {
                  
        // Lets test this baby out! (eqObject compares if 2 objects are equal)
        return eqObjects(object1Values[key], object2Values[key]);
      }
  
      // check if the keys match
      if (object2Keys[key] === object1Keys[key]) {
  
        // check if Values match
        result = true;
  
        // check if exists out of order
      } else if (object2Keys.includes(object1Keys[key])) {
                  
        return true;
              
      } else {
        result = false;
      }
  
    }
  
  }
          
  return result;
      
};

module.exports = eqObjects;

// Test to build
// assertObjectsEqual(
//   eqObjects({a:1,b:2},{a:1,b:2}),
//   false
// );