// DAY24 Sort By

// Given an array arr and a function fn, return a sorted array sortedArr. You can assume fn only returns numbers and those numbers determine the sort order of sortedArr. sortedArr must be sorted in ascending order by fn output.

// You may assume that fn will never duplicate numbers for a given array.

const sortBy = function (arr, fn) {
  // One line solution using Array.prototype.sort
  return arr.sort((a, b) => fn(a) - fn(b));
};

module.exports = {
  sortBy,
};
