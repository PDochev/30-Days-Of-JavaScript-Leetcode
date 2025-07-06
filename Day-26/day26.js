// DAY26 - Flatten Deeply Nested Array

// Given a multi-dimensional array arr and a depth n, return a flattened version of that array.

// A multi-dimensional array is a recursive data structure that contains integers or other multi-dimensional arrays.

// A flattened array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than n. The depth of the elements in the first array are considered to be 0.

// Please solve it without the built-in Array.flat method.

const flat = function (arr, n) {
  // Base case: if n is 0, return the array as is
  if (n === 0) {
    return arr;
  }

  // Initialize an empty array to hold the flattened result
  const result = [];

  // Iterate through each element in the input array
  for (const el of arr) {
    // If the element is an array and n > 1, recursively flatten it
    if (Array.isArray(el)) {
      result.push(...flat(el, n - 1));
    } else {
      // If it's not an array, just add the element to the result
      result.push(el);
    }
  }

  return result;
};

module.exports = {
  flat,
};
