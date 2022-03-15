const middle = function(array) {
    
  const arrayLength = array.length;

  let result = [];

  if (arrayLength <= 2) {
    return result;
  }
       
  const isOdd = arrayLength % 2 !== 0;
        
  // For arrays with odd number of elements, an array containing a single middle element should be returned.
  if (isOdd) {

    // Step 1: Add the first and last number of the range together.
    const edgeSum = parseInt(array[0]) + parseInt(array[arrayLength - 1]);
    result.push(edgeSum / 2);
    
  } else {
            
    // Step 1: Add the first and last number of the range together.
    const edgeSum = parseInt(array[0]) + parseInt(array[arrayLength - 1]);

    // Step 2: Divide the total by 2 to get the Half value (middle)
    const resultValue = edgeSum / 2;

    // Step 3: Lets grab both the floor and ceil from this result and place as two results :)
    const resultOne = Math.floor(resultValue);
    const resultTwo = Math.ceil(resultValue);
    result.push(resultOne,resultTwo);
  }

  return result;
};

module.exports = middle;