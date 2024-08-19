// Example 1:
// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

// Example 2:
// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

//Example 3:
// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

const { compose } = require("./day8");

describe("Function Composition", () => {
  test("Example 1: should correctly compose functions and apply them from right to left ", () => {
    const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
    const x = 4;
    const result = 65;
    expect(fn(x)).toBe(result);
  });
  test("Example 2: should correctly handle multiple identical functions ", () => {
    const fn = compose([(x) => 10 * x, (x) => 10 * x, (x) => 10 * x]);
    const x = 1;
    const result = 1000;
    expect(fn(x)).toBe(result);
  });
  test("Example 3: The composition of zero functions should be the identity function ", () => {
    const fn = compose([]);
    const x = 42;
    const result = 42;
    expect(fn(x)).toEqual(result);
  });
});
