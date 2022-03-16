// test/countLettersTest.js
const assert = require('chai').assert;
const countLetters = require('../countLetters');
const assertObjectsEqual = require('../assertObjectsEqual');

// TEST CODE
describe("countLetters.js test---", () => {

  it("Should return True 'LHL' === { L: 2, H: 1 }", () => {
    assert.isTrue(assertObjectsEqual(countLetters("LHL"), { L: 2, H: 1 }));
  });

  it("Should return True 'test' === { t: 2, e: 1, s: 1 }", () => {
    assert.isTrue(assertObjectsEqual(countLetters("test"), { t: 2, e: 1, s: 1 }));
  });
  it("Should return False 'LHL' !== { L: 2, H: 0 }", () => {
    assert.isFalse(assertObjectsEqual(countLetters("LHL"), { L: 2, H: 0 }));
  });

  it("Should return True 'test' === { t: 2, e: 2, s: 1 }", () => {
    assert.isFalse(assertObjectsEqual(countLetters("test"), { t: 2, e: 2, s: 1 }));
   
  });

    
});