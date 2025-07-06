// Example 1:

// Input: obj = [null, 0, false, 1]
// Output: [1]
// Explanation: All falsy values have been removed from the array.

// Example 2:

// Input: obj = {"a": null, "b": [false, 1]}
// Output: {"b": [1]}
// Explanation: obj["a"] and obj["b"][0] had falsy values and were removed.

// Example 3:

// Input: obj = [null, 0, 5, [0], [false, 16]]
// Output: [5, [], [16]]
// Explanation: obj[0], obj[1], obj[3][0], and obj[4][0] were falsy and removed.

const { compactObject } = require("./day27");

describe("compactObject", () => {
  test("should remove falsy values from an array", () => {
    const obj = [null, 0, false, 1];
    expect(compactObject(obj)).toEqual([1]);
  });

  test("should remove falsy values from an object", () => {
    const obj = { a: null, b: [false, 1] };
    expect(compactObject(obj)).toEqual({ b: [1] });
  });

  test("should handle nested arrays and objects", () => {
    const obj = [null, 0, 5, [0], [false, 16]];
    expect(compactObject(obj)).toEqual([5, [], [16]]);
  });
  test("Complex nested structure", () => {
    const obj = {
      a: null,
      b: [0, 1, { c: false, d: 2 }],
      e: { f: 3, g: null },
      h: [null, 4, [5, false]],
    };
    expect(compactObject(obj)).toEqual({
      b: [1, { d: 2 }],
      e: { f: 3 },
      h: [4, [5]],
    });
  });

  test("all falsy values", () => {
    const obj = [null, 0, false, "", undefined];
    expect(compactObject(obj)).toEqual([]);
  });
  test("should return an empty object when input is an empty object", () => {
    const obj = {};
    expect(compactObject(obj)).toEqual({});
  });
});
