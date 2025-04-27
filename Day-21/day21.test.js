// Example 1:

// Input: arr = [1,2,3,4,5], size = 1
// Output: [[1],[2],[3],[4],[5]]
// Explanation: The arr has been split into subarrays each with 1 element.

// Example 2:

// Input: arr = [1,9,6,3,2], size = 3
// Output: [[1,9,6],[3,2]]
// Explanation: The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.

// Example 3:

// Input: arr = [8,5,3,2,6], size = 6
// Output: [[8,5,3,2,6]]
// Explanation: Size is greater than arr.length thus all elements are in the first subarray.

// Example 4:

// Input: arr = [], size = 1
// Output: []
// Explanation: There are no elements to be chunked so an empty array is returned.

const { chunk } = require("./day21");

describe("chunk function", () => {
  test("The arr has been split into subarrays each with 1 element.", () => {
    const arr = [1, 2, 3, 4, 5];
    const size = 1;
    const result = chunk(arr, size);
    expect(result).toEqual([[1], [2], [3], [4], [5]]);
  });

  test("The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.", () => {
    const arr = [1, 9, 6, 3, 2];
    const size = 3;
    const result = chunk(arr, size);
    expect(result).toEqual([
      [1, 9, 6],
      [3, 2],
    ]);
  });

  test("Size is greater than arr.length thus all elements are in the first subarray", () => {
    const arr = [8, 5, 3, 2, 6];
    const size = 6;
    const result = chunk(arr, size);
    expect(result).toEqual([[8, 5, 3, 2, 6]]);
  });

  test("There are no elements to be chunked so an empty array is returned.", () => {
    const arr = [];
    const size = 1;
    const result = chunk(arr, size);
    expect(result).toEqual([]);
  });
});
