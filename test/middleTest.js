// test for ../middle.js
const assert = require('chai').assert;
const middle = require('../middle');

// TEST CODE
describe("middle.js tests---",()=>{

  it("For arrays with one elements, there is no middle. Return an empty array.",()=>{
    assert.isArray(middle([1]), []);
  })

  it("For arrays with two elements, there is no middle. Return an empty array.",()=>{
    assert.isArray(
      middle([1,2]),
      []
    )
  })

  it("For arrays with odd number of elements, an array containing a single middle element should be returned.",()=>{
    assert.isArray(
      middle([1, 2, 3]),
      [2]
    )
  })

  it("For arrays with odd number of elements, an array containing a single middle element should be returned.",()=>{
    assert.isArray(
      middle([1, 2, 3, 4, 5]),
      [3]
    )
  })

  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned",()=>{
    assert.isArray(
      middle([1, 2, 3, 4]),
      [2, 3]
    )
  })
  
  it("For arrays with an even number of elements, an array containing the two elements in the middle should be returned",()=>{
    assert.isArray(
      middle([1, 2, 3, 4, 5, 6]),
      [3, 4]
    )
  })

});
