// DAY21 Chunk Array

// Given an array arr and a chunk size size, return a chunked array.

// A chunked array contains the original elements in arr, but consists of subarrays each of length size. The length of the last subarray may be less than size if arr.length is not evenly divisible by size.

// You may assume the array is the output of JSON.parse. In other words, it is valid JSON.

// Please solve it without using lodash's _.chunk function.

const chunk = function (arr, size) {
  // Create an empty array to hold the chunks
  const chunked = [];

  // Loop through the array in increments of size
  for (let i = 0; i < arr.length; i += size) {
    // Slice the array from the current index to the current index + size
    const chunk = arr.slice(i, i + size);

    chunked.push(chunk);
  }

  return chunked;
};

module.exports = { chunk };
