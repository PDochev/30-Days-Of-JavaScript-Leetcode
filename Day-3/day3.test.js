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
    expect(toBeOrNotToBe(5).toBe(5)).toBe(true);
    expect(toBeOrNotToBe("hello").toBe("hello")).toBe(true);
    expect(toBeOrNotToBe(null).toBe(null)).toBe(true);
    expect(toBeOrNotToBe(undefined).toBe(undefined)).toBe(true);
  });

  test("should throw an error when values are not equal (toBe)", () => {
    expect(() => toBeOrNotToBe(5).toBe(10)).toThrow("Not Equal");
    expect(() => toBeOrNotToBe("hello").toBe("world")).toThrow("Not Equal");
    expect(() => toBeOrNotToBe(null).toBe(undefined)).toThrow("Not Equal");
  });

  test("should return true when values are not equal (notToBe)", () => {
    expect(toBeOrNotToBe(5).notToBe(10)).toBe(true);
    expect(toBeOrNotToBe("hello").notToBe("world")).toBe(true);
    expect(toBeOrNotToBe(null).notToBe(undefined)).toBe(true);
  });
  test("should throw an error when values are equal (notToBe)", () => {
    expect(() => toBeOrNotToBe(5).notToBe(5)).toThrow("Equal");
    expect(() => toBeOrNotToBe("hello").notToBe("hello")).toThrow("Equal");
    expect(() => toBeOrNotToBe(null).notToBe(null)).toThrow("Equal");
  });

  // Edge cases
  test("should handle special JavaScript values", () => {
    expect(toBeOrNotToBe(NaN).notToBe(NaN)).toBe(true); // NaN !== NaN in JavaScript
    expect(() => toBeOrNotToBe(0).notToBe(-0)).toThrow("Equal");
    expect(() => toBeOrNotToBe(-0).notToBe(0)).toThrow("Equal");
    expect(toBeOrNotToBe(undefined).notToBe(null)).toBe(true);
  });
});
