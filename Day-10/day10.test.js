// Example 1:
// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called

// Example 2:
// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called

const { once } = require("./day10");

describe("Allow One Function Call", () => {
  test("Example 1: Calling the function twice should return the result on the first call and undefined on the second call", () => {
    const fn = (a, b, c) => a + b + c;
    const onceFn = once(fn);
    expect(onceFn(1, 2, 3)).toBe(6);
    expect(onceFn(1, 2, 3)).toBeUndefined();
  });
  test("Example 2: Calling the function three times should return the result on the first call and undefined all the calls that follow", () => {
    const fn = (a, b, c) => a * b * c;
    const onceFn = once(fn);
    expect(onceFn(5, 7, 4)).toBe(140);
    expect(onceFn(2, 3, 6)).toBeUndefined();
    expect(onceFn(4, 6, 8)).toBeUndefined();
  });
});
