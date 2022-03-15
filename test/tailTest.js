const assertArraysEqual = require('../assertArraysEqual');
const tail = require('../tail');

console.log('\n tailTest.js & assertArraysEqual.js ---');
assertArraysEqual(tail(['Hello', 'Lighthouse', 'Labs']), [ 'Lighthouse', 'Labs' ]);
assertArraysEqual([tail(['Hello', 'Lighthouse', 'Labs']).length], [2]); // ensure we get back two elements
assertArraysEqual([tail(['Hello', 'Lighthouse', 'Labs'])[0]], ['Lighthouse']); // ensure first element is 'Lighthouse'
assertArraysEqual([tail(['Hello', 'Lighthouse', 'Labs'])[1]], ['Labs']); // ensure second element is 'Labs'