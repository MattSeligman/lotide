const flatten = function(array) {

  let flattenedArray = [];

  const checkFlat = (array)=>{
    for (let arrayIndex in array) {
      let isArray = Array.isArray(array[arrayIndex]);
      if (!isArray) {
        flattenedArray.push(array[arrayIndex]);
      } else {
        checkFlat(array[arrayIndex]);
      }
    }
  };
 
  checkFlat(array);
  return flattenedArray;
};

module.exports = flatten;
  