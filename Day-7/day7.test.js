// Example 1:
// Input: nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

// Example 2:
// Input: nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.

// Example 3:
// Input: nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.

const { reduce } = require("./day7");

describe("Array Reduce Transformation", () => {
  test("Example 1: should sum all elements in the array", () => {
    const arr = [1, 2, 3, 4];
    const sum = (accum, curr) => accum + curr;
    const init = 0;
    const result = reduce(arr, sum, init);
    expect(result).toEqual(10);
  });
  test("Example 2: should sum all elements' squares in the array, starting from 100", () => {
    const arr = [1, 2, 3, 4];
    const sum = (accum, curr) => accum + curr * curr;
    const init = 100;
    const result = reduce(arr, sum, init);
    expect(result).toEqual(130);
  });
  test("Example 3: For empty arrays, the answer should always be init.", () => {
    const arr = [];
    const sum = (accum, curr) => 0;
    const init = 25;
    const result = reduce(arr, sum, init);
    expect(result).toEqual(25);
  });
  test("should handle negative numbers", () => {
    const nums = [-1, -2, -3, -4];
    const sum = (accum, curr) => accum + curr;
    const init = 0;
    const result = reduce(nums, sum, init);
    expect(result).toEqual(-10); // -1 + -2 + -3 + -4 = -10
  });
});
