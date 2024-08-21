// Example 1:
// Input: args = [5]
// Output: 1
// Explanation:
//argumentsLength(5); // 1

// One value was passed to the function so it should return 1.

// Example 2:
// Input: args = [{}, null, "3"]
// Output: 3
// Explanation:
// argumentsLength({}, null, "3"); // 3

// Three values were passed to the function so it should return 3.

const { argumentsLength } = require("./day9");

describe("Return Length of Arguments Passed", () => {
  test("Example 1: Should return 1 if one value is passed to the function", () => {
    const args = [5];
    const result = 1;
    expect(argumentsLength(args)).toBe(result);
  });

  test("Example 2: Should return 3 if three values are passed to the function", () => {
    const args = [{}, null, "3"];
    const result = 3;
    expect(argumentsLength(...args)).toEqual(result);
  });
});
