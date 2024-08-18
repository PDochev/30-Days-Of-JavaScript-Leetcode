// Example 1:
// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10

// Example 2:
// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0

// Example 3:
// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out

const { filter } = require("./day6");

describe("Filter Elements from Array", () => {
  test("Example 1: The function filters out values that are not greater than 10", () => {
    const arr = [0, 10, 20, 30];
    const greaterThan10 = (n) => n > 10;
    const result = filter(arr, greaterThan10);
    expect(result).toEqual([20, 30]);
  });
  test("Example 2: The function should remove elements not at index 0", () => {
    const arr = [1, 2, 3];
    const firstIndex = (n, i) => i === 0;
    const result = filter(arr, firstIndex);
    expect(result).toEqual([1]);
  });
  test("Example 3: Falsey values such as 0 should be filtered out", () => {
    const arr = [-2, -1, 0, 1, 2];
    const plusOne = (n) => n + 1;
    const result = filter(arr, plusOne);
    expect(result).toEqual([-2, 0, 1, 2]);
  });
});
