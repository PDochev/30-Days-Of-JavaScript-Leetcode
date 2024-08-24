// Example 1:
// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
//let t = Date.now();
// sleep(100).then(() => {
// console.log(Date.now() - t); // 100
// });

// Example 2:
// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

const { sleep } = require("./day13");

describe("Sleep", () => {
  test("Example 1: should resolve after 100 milliseconds", async () => {
    const millis = 100;
    const startTime = Date.now();

    await sleep(millis);

    const endTime = Date.now();
    const elapsed = endTime - startTime;

    // We use a margin to account for any minor delays that might occur
    expect(elapsed).toBeGreaterThanOrEqual(millis);
    expect(elapsed).toBeLessThan(millis + 20); // Allowing for a small margin of error
  });

  test("Example 2: should resolve after 200 milliseconds", async () => {
    const millis = 200;
    const startTime = Date.now();

    await sleep(millis);

    const endTime = Date.now();
    const elapsed = endTime - startTime;

    expect(elapsed).toBeGreaterThanOrEqual(millis);
    expect(elapsed).toBeLessThan(millis + 20); // Allowing for a small margin of error
  });
});
