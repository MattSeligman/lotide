// test/eqObjectsTest.js
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

// TEST CODE
describe("eqObjects.js test---", () => {

  it("Should return True {a:1,b:2} === {a:1,b:2}", () => {
    assert.isTrue(
      eqObjects({a:1,b:2},{a:1,b:2})
    );
  });

  it("Should return False {a:1,b:3} !== {a:1,b:2}", () => {
    assert.isFalse(
      eqObjects({a:1,b:3},{a:1,b:2})
    );
  });
    
});