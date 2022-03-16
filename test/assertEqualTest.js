// test/assertEqualTest.js
const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// TEST CODE
describe("assertEqual.js test---", () => {

  it("Should return True 'Bootcamp' === 'Bootcamp", () => {
    assert.isTrue(assertEqual("Bootcamp", "Bootcamp"));
  });

  it("Should return False 'Bootcamp!' === 'Bootcamp", () => {
    assert.isFalse(assertEqual("Bootcamp!", "Bootcamp"));
  });

  it("Should return True 1 === 1", () => {
    assert.isTrue(assertEqual(1,1));
  });

  it("Should return False 2 === 1", () => {
    assert.isFalse(assertEqual(2,1));
  });
    
});