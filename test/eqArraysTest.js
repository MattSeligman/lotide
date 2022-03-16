// test/eqArrays.js
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// TEST CODE
describe("eqArrays.js test---", () => {

  it("Should return True [1,2,3] === [1,2,3]", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("Should return True (Recursive test) [1, [1,[2,3]], [3]] === [1, [1,[2,3]], [3]]", () => {
    assert.isTrue(eqArrays([1, [1,[2,3]], [3]], [1, [1,[2,3]], [3]]));
  });

  it("Should return False [1,2,2] === [1,2,3]", () => {
    assert.isFalse(eqArrays([1, 2, 2], [1, 2, 3]));
  });
    
});