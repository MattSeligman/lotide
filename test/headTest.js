// test/head.js
const assertEqual = require('../assertEqual');
const head = require('../head');

// TEST CODE
console.log('\n assertEqual.js & head.js test---');
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);