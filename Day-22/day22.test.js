// Example 1:

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

// Example 2:

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

const { last } = require("./day22");

describe("Array.prototype.last", () => {
  test("should return the last element of the array", () => {
    const nums = [null, {}, 3];
    expect(nums.last()).toBe(3);
  });

  test("should return -1 for an empty array", () => {
    const nums = [];
    expect(nums.last()).toBe(-1);
  });
});
