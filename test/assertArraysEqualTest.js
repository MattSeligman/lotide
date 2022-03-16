// test/assertArraysEqual.js
const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

// TEST CODE
describe("assertArraysEqual.js test---", () => {

  it("Should return True [1, 2, 3] === [1, 2, 3]", () => {
    assert.isTrue(
      assertArraysEqual([1, 2, 3], [1, 2, 3])
    );
  });

  it("Should return False [1, 2, 3] !== [1, 2, 1]", () => {
    assert.isFalse(
      assertArraysEqual([1, 2, 3], [1, 2, 1])
    );
  });
    
});