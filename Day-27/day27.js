// DAY27 - Compact Object

// Given an object or array obj, return a compact object.

// A compact object is the same as the original object, except with keys containing falsy values removed. This operation applies to the object and any nested objects. Arrays are considered objects where the indices are keys. A value is considered falsy when Boolean(value) returns false.

// You may assume the obj is the output of JSON.parse. In other words, it is valid JSON.

const compactObject = function (obj) {
  // Handle null or primitive values
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Handle arrays
  if (Array.isArray(obj)) {
    return obj
      .filter(Boolean) // Remove falsy values
      .map(compactObject); // Recursively compact remaining elements
  }

  // Handle objects
  const result = {};
  for (const key in obj) {
    const value = obj[key];
    // Only include key if value is truthy
    if (Boolean(value)) {
      result[key] = compactObject(value);
    }
  }

  return result;
};

// Micro-optimized version of compactObject
// This version avoids unnecessary Boolean() calls and uses a more efficient truthy check.
// It also avoids double iteration over arrays, which can be a performance bottleneck for large datasets
// while still maintaining clarity and correctness.
// const compactObject = function(obj) {
//     // Handle null or primitive values
//     if (obj === null || typeof obj !== "object") {
//         return obj;
//     }

//     // Handle arrays - micro-optimization: avoid double iteration
//     if (Array.isArray(obj)) {
//         const result = [];
//         for (let i = 0; i < obj.length; i++) {
//             const value = obj[i];
//             if (value) { // Slightly faster than Boolean(value)
//                 result.push(compactObject(value));
//             }
//         }
//         return result;
//     }

//     // Handle objects - micro-optimization: avoid Boolean() call
//     const result = {};
//     for (const key in obj) {
//         const value = obj[key];
//         if (value) { // Truthy check is faster than Boolean(value)
//             result[key] = compactObject(value);
//         }
//     }

//     return result;
// };

module.exports = {
  compactObject,
};
