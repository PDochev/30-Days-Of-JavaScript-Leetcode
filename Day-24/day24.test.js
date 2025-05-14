// Example 1:

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

// Example 2:

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.

// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1.

const { sortBy } = require("./day24");

describe("sortBy", () => {
  test("should sort numbers in ascending order", () => {
    const arr = [5, 4, 1, 2, 3];
    const fn = (x) => x;
    expect(sortBy(arr, fn)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should sort objects by property value", () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    const fn = (d) => d.x;
    expect(sortBy(arr, fn)).toEqual([{ x: -1 }, { x: 0 }, { x: 1 }]);
  });

  test("should sort arrays by index value", () => {
    const arr = [
      [3, 4],
      [5, 2],
      [10, 1],
    ];
    const fn = (x) => x[1];
    expect(sortBy(arr, fn)).toEqual([
      [10, 1],
      [5, 2],
      [3, 4],
    ]);
  });
});
