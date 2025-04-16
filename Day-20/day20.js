// DAY20: Is Object Empty

// Given an object or an array, return if it is empty.

// An empty object contains no key-value pairs.
// An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

const isEmpty = function (obj) {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }

  // return Object.keys(obj).length === 0
};

module.exports = { isEmpty };
