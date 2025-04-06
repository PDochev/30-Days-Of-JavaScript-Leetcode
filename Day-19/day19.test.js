// Example 1:

// Input: functions = [
//   () => new Promise(resolve => setTimeout(() => resolve(5), 200))
// ]
// Output: {"t": 200, "resolved": [5]}
// Explanation:
// promiseAll(functions).then(console.log); // [5]

// The single function was resolved at 200ms with a value of 5.

// Example 2:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(1), 200)),
//     () => new Promise((resolve, reject) => setTimeout(() => reject("Error"), 100))
// ]
// Output: {"t": 100, "rejected": "Error"}
// Explanation: Since one of the promises rejected, the returned promise also rejected with the same error at the same time.

// Example 3:

// Input: functions = [
//     () => new Promise(resolve => setTimeout(() => resolve(4), 50)),
//     () => new Promise(resolve => setTimeout(() => resolve(10), 150)),
//     () => new Promise(resolve => setTimeout(() => resolve(16), 100))
// ]
// Output: {"t": 150, "resolved": [4, 10, 16]}
// Explanation: All the promises resolved with a value. The returned promise resolved when the last promise resolved.

const { promiseAll } = require("./day19");

describe("promiseAll function", () => {
  test("should resolve with an array of resolved values when all promises are resolved", async () => {
    const functions = [
      () => new Promise((resolve) => setTimeout(() => resolve(5), 200)),
    ];

    const result = await promiseAll(functions);
    expect(result).toEqual([5]);
  });

  test("should reject with the reason of the first rejection when any promise is rejected", async () => {
    const functions = [
      () => new Promise((resolve) => setTimeout(() => resolve(1), 200)),
      () => new Promise((_, reject) => setTimeout(() => reject("Error"), 100)),
    ];

    await expect(promiseAll(functions)).rejects.toEqual("Error");
  });

  test("should resolve with an array of resolved values when all promises are resolved", async () => {
    const functions = [
      () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
      () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
      () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
    ];

    const result = await promiseAll(functions);
    expect(result).toEqual([4, 10, 16]);
  });

  test("Should preserve the order of results regardless of resolution time", async () => {
    const functions = [
      () => new Promise((resolve) => setTimeout(() => resolve("last"), 300)),
      () => new Promise((resolve) => setTimeout(() => resolve("middle"), 200)),
      () => new Promise((resolve) => setTimeout(() => resolve("first"), 100)),
    ];

    const result = await promiseAll(functions);

    expect(result).not.toEqual(["first", "middle", "last"]);
    expect(result).toEqual(["last", "middle", "first"]);
  });
});
