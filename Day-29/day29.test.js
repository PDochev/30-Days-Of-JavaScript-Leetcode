// Example 1:

// Input: nums = [[1,2],[3,4]], operation = "Add"
// Output: 10
// Explanation:
// const obj1 = new ArrayWrapper([1,2]);
// const obj2 = new ArrayWrapper([3,4]);
// obj1 + obj2; // 10

// Example 2:

// Input: nums = [[23,98,42,70]], operation = "String"
// Output: "[23,98,42,70]"
// Explanation:
// const obj = new ArrayWrapper([23,98,42,70]);
// String(obj); // "[23,98,42,70]"

// Example 3:

// Input: nums = [[],[]], operation = "Add"
// Output: 0
// Explanation:
// const obj1 = new ArrayWrapper([]);
// const obj2 = new ArrayWrapper([]);
// obj1 + obj2; // 0

const ArrayWrapper = require("./day29");

describe("Array Wrapper", () => {
  test("Example 1", () => {
    const obj1 = new ArrayWrapper([1, 2]);
    const obj2 = new ArrayWrapper([3, 4]);
    expect(obj1 + obj2).toBe(10);
  });

  test("Example 2", () => {
    const obj = new ArrayWrapper([23, 98, 42, 70]);
    expect(String(obj)).toBe("[23,98,42,70]");
  });

  test("Example 3", () => {
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);
    expect(obj1 + obj2).toBe(0); // Both arrays are empty
  });
});
