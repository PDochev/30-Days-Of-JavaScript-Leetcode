// Example 1:
// Input: func = () => expect(5).toBe(5)
// Output: {"value": true}
// Explanation: 5 === 5 so this expression returns true.

// Example 2:
// Input: func = () => expect(5).toBe(null)
// Output: {"error": "Not Equal"}
// Explanation: 5 !== null so this expression throw the error "Not Equal".

// Example 3:
// Input: func = () => expect(5).notToBe(null)
// Output: {"error": "true"}
// Explanation: 5 !== null so this expression returns true.

const { toBeOrNotToBe } = require("./day3");

describe("To Be Or Not To Be", () => {
  // Test cases for toBe method
  test("should return true when values are equal (toBe)", () => {
    const result = toBeOrNotToBe(5).toBe(5);
    expect(result).toBe(true); // Expecting the result of toBe to be true
  });

  test("should throw an error when values are not equal (toBe)", () => {
    expect(() => {
      toBeOrNotToBe(5).toBe(null); // This should throw an error
    }).toThrow("Not Equal"); // Now you are correctly testing if the error was thrown
  });

  test("should return true when values are not equal (notToBe)", () => {
    const result = toBeOrNotToBe(5).notToBe(null);
    expect(result).toBe(true); // Expecting the result of notToBe to be true
  });
});
