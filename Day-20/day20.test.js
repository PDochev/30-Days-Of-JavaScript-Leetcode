// Example 1:
// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.

// Example 2:
// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.

// Example 3:
// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

const { isEmpty } = require("./day20");

describe("isEmpty function", () => {
  test("should return false for non-empty object", () => {
    const obj = { x: 5, y: 42 };
    expect(isEmpty(obj)).toBe(false);
  });

  test("should return true for empty object", () => {
    const obj = {};
    expect(isEmpty(obj)).toBe(true);
  });

  test("should return false for non-empty array", () => {
    const arr = [null, false, 0];
    expect(isEmpty(arr)).toBe(false);
  });

  test("should return true for empty array", () => {
    const arr = [];
    expect(isEmpty(arr)).toBe(true);
  });
});
