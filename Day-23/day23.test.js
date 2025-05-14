// Example 1:

// Input:
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ],
// fn = function (item) {
//   return item.id;
// }
// Output:
// {
//   "1": [{"id": "1"}, {"id": "1"}],
//   "2": [{"id": "2"}]
// }
// Explanation:
// Output is from array.groupBy(fn).
// The selector function gets the "id" out of each item in the array.
// There are two objects with an "id" of 1. Both of those objects are put in the first array.
// There is one object with an "id" of 2. That object is put in the second array.

// Example 2:

// Input:
// array = [
//   [1, 2, 3],
//   [1, 3, 5],
//   [1, 5, 9]
// ]
// fn = function (list) {
//   return String(list[0]);
// }
// Output:
// {
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }
// Explanation:
// The array can be of any type. In this case, the selector function defines the key as being the first element in the array.
// All the arrays have 1 as their first element so they are grouped together.
// {
//   "1": [[1, 2, 3], [1, 3, 5], [1, 5, 9]]
// }

// Example 3:

// Input:
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// fn = function (n) {
//   return String(n > 5);
// }
// Output:
// {
//   "true": [6, 7, 8, 9, 10],
//   "false": [1, 2, 3, 4, 5]
// }
// Explanation:
// The selector function splits the array by whether each number is greater than 5.

const { groupBy } = require("./day23");

describe("Array.prototype.groupBy", () => {
  test("should group objects by id", () => {
    const array = [{ id: "1" }, { id: "1" }, { id: "2" }];
    const fn = function (item) {
      return item.id;
    };
    expect(array.groupBy(fn)).toEqual({
      1: [{ id: "1" }, { id: "1" }],
      2: [{ id: "2" }],
    });
  });
  test("should group arrays by first element", () => {
    const array = [
      [1, 2, 3],
      [1, 3, 5],
      [1, 5, 9],
    ];
    const fn = function (list) {
      return String(list[0]);
    };
    expect(array.groupBy(fn)).toEqual({
      1: [
        [1, 2, 3],
        [1, 3, 5],
        [1, 5, 9],
      ],
    });
  });
  test("should group numbers by greater than 5", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const fn = function (n) {
      return String(n > 5);
    };
    expect(array.groupBy(fn)).toEqual({
      true: [6, 7, 8, 9, 10],
      false: [1, 2, 3, 4, 5],
    });
  });
  test("should return an empty object for an empty array", () => {
    const array = [];
    const fn = function (item) {
      return item.id;
    };
    expect(array.groupBy(fn)).toEqual({});
  });
  test("should group by a function that returns undefined", () => {
    const array = [1, 2, 3];
    const fn = function (item) {
      return undefined;
    };
    expect(array.groupBy(fn)).toEqual({
      undefined: [1, 2, 3],
    });
  });
  test("should group by a function that returns null", () => {
    const array = [1, 2, 3];
    const fn = function (item) {
      return null;
    };
    expect(array.groupBy(fn)).toEqual({
      null: [1, 2, 3],
    });
  });
  test("should group by a function that returns a number", () => {
    const array = [1, 2, 3];
    const fn = function (item) {
      return item;
    };
    expect(array.groupBy(fn)).toEqual({
      1: [1],
      2: [2],
      3: [3],
    });
  });
});
