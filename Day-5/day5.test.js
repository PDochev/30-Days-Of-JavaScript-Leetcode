// Example 1
// Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
// Output: [2,3,4]
// Explanation:
// const newArray = map(arr, plusone); // [2,3,4]
// The function increases each value in the array by one.

// Example 2
// Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
// Output: [1,3,5]
// Explanation: The function increases each value by the index it resides in.

// Example 3
// Input: arr = [10,20,30], fn = function constant() { return 42; }
// Output: [42,42,42]
// Explanation: The function always returns 42.

const { map } = require("./day5");

describe("Apply Transform Over Each Element in Array", () => {
  test("Example 1: The function increases each value in the array by one. ", () => {
    const arr = [1, 2, 3];
    const plusone = (n) => n + 1;
    const result = map(arr, plusone);
    expect(result).toEqual([2, 3, 4]);
  });
  test("Example 2: The function increases each value by the index it resides in.", () => {
    const arr = [1, 2, 3];
    const plusI = (n, i) => n + i;
    const result = map(arr, plusI);
    expect(result).toEqual([1, 3, 5]);
  });
  test("Example 3: The function always returns 42.", () => {
    const arr = [10, 20, 30];
    const constant = () => 42;
    const result = map(arr, constant);
    expect(result).toEqual([42, 42, 42]);
  });
  test("should return an empty array when the input array is empty", () => {
    const arr = [];
    const fn = (x) => x * 2;
    const result = map(arr, fn);
    expect(result).toEqual([]);
  });
  test("should handle a function that changes the type of the elements", () => {
    const arr = [1, 2, 3];
    const fn = (x) => x.toString();
    const result = map(arr, fn);
    expect(result).toEqual(["1", "2", "3"]);
  });
  test("should apply a function that returns a boolean value", () => {
    const arr = [1, 2, 3, 4];
    const fn = (x) => x % 2 === 0;
    const result = map(arr, fn);
    expect(result).toEqual([false, true, false, true]);
  });
});
