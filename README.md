# Lotide

Lotide is a mini clone of the [Lodash](https://lodash.com) Library to practice creating a personal npm package. It's like lodash, but without all that extra stuff. Just the things you need to start your project. Lotide is my first package I ever published.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. I welcome any feedback!

*Not all modules* have had tests built for them, I plan to expand the tests further.

## Usage

**Install it:**

`npm install @mattseligman/lotide`

**Require it:**

`const _ = require('@mattseligman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

**Test it:**

`mocha test`


## Documentation

The following functions are currently implemented:

* `head(array)`: Return an array with only the first value.
* `tail(array)`: Return an array with only the end values (excluding the first entry)
* `middle(array)`: Produces the middle value within an array.
* `assertArrayEqual(array, array)`: Will produce a console log if arrays are True or False.
* `assertEqual(string, string)`: Compares two strings and results in True or False
* `assertObjectsEqual(object,object)`: Compares two objects and results in True or False.
* `countLetters(string)`: Returns an object with the amount of letters contained.
* `countOnly(array, object)`: Returns an object containing counts of everything that the input object listed.
* `eqArrays(array,array)`: Compares two Arrays resulting in True or False.
* `eqObjects(object, object)`: Compares two Objects resulting in True or False.
* `findKey(object, key)`: Returns the key if found within the object.
* `findKeyByValue(object, value)`: Returns the first key which contains the given value. If no key with that given value is found, then returns undefined.
* `flatten(array)`: Returns a flattened array.
* `letterPositions(string)`: Return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: Returns a new array based on the results of the callback function.
* `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning. It will keep going until the callback/predicate returns a truthy value.
* `without(array, array)`: Returns the first array without the values of the second array.