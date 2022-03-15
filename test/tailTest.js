// test for ../tail.js
const assert = require('chai').assert;
const tail = require('../tail');

describe("tailTest.js tests---",()=>{

    it("For arrays with one elements, there is no middle. Return an empty array.",()=>{
        assert.deepEqual(        
            tail( ['Hello', 'Lighthouse', 'Labs'] ), 
            [ 'Lighthouse', 'Labs' ]
        );
    });

    it("Return the remaining array length of 2",()=>{
        assert.deepEqual(        
            [tail(['Hello', 'Lighthouse', 'Labs']).length], 
            [2]
        );
    });

    it("Return the first element Lighthouse",()=>{
        assert.deepEqual(        
            [tail(['Hello', 'Lighthouse', 'Labs'])[0]], 
            ['Lighthouse']
        );
    });

    it("Return the first element Labs",()=>{
        assert.deepEqual(        
            [tail(['Hello', 'Lighthouse', 'Labs'])[1]], 
            ['Labs']
        );
    });

});