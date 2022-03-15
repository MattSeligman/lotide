// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

// Tests to build
// const na = { a: "1", b: "2" };
// const tb = { a: "1", b: "2" };

// eqObjects(na, tb); // => true

// assertEqual(
//   eqObjects(na, tb),
//   true
// );

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };

// assertEqual(
//   eqObjects(ab, ba),
//   true
// );

// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(
//   eqObjects(ab, abc),
//   false
// );

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// assertEqual(
//   eqObjects(cd, dc),
//   true
// );

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(
//   eqObjects(cd, cd2),
//   false
// );