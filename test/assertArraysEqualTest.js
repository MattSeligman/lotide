// test/assertArraysEqual.js
const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

// TEST CODE
describe("assertArraysEqual.js test---", () => {

  it("Should return True [1, 2, 3] === [1, 2, 3]", () => {
    assert.isTrue(
      eqArrays([1, 2, 3], [1, 2, 3])
    );
  });

  it("Should return False [1, 2, 3] !== [1, 2, 1]", () => {
    assert.isFalse(
      eqArrays([1, 2, 3], [1, 2, 1])
    );
  });
    
});