const assert = require('chai').assert;
const flatten = require('../flatten');

// TEST CODE
describe("flatten.js test---", () => {

  it("Should return True [1,2,3] === [1,2,3]", () => {
    assert.deepEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });

  it("Should return True (Recursive test) [1, [1,[2,3]], [3]] === [1, 1, 2, 3, 3]", () => {
    assert.deepEqual(flatten([1, [1,[2,3]], [3]]),  [ 1, 1, 2, 3, 3 ]);
  });

  it("Should return False [1, 2, [3]] === [1, 2, 3]", () => {
    assert.deepEqual(flatten([1, 2, [3]]), [1, 2, 3]);
  });
    
});