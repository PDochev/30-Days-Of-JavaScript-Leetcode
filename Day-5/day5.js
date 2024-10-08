// DAY 5:
// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

const map = function (arr, fn) {
  let transformedArr = [];
  for (let i = 0; i < arr.length; i++) {
    transformedArr[i] = fn(arr[i], i);
  }

  return transformedArr;
};

module.exports = { map };
