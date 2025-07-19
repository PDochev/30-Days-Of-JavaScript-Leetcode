// Example 1:

// Input:
// actions = ["Calculator", "add", "subtract", "getResult"],
// values = [10, 5, 7]
// Output: 8
// Explanation:
// new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8

// Example 2:

// Input:
// actions = ["Calculator", "multiply", "power", "getResult"],
// values = [2, 5, 2]
// Output: 100
// Explanation:
// new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100

// Example 3:

// Input:
// actions = ["Calculator", "divide", "getResult"],
// values = [20, 0]
// Output: "Division by zero is not allowed"
// Explanation:
// new Calculator(20).divide(0).getResult() // 20 / 0

// The error should be thrown because we cannot divide by zero.

const Calculator = require("./day30");

describe("Calculator with Method Chaining", () => {
  test("Example 1", () => {
    const calc = new Calculator(10);
    expect(calc.add(5).subtract(7).getResult()).toBe(8); // 10 + 5 - 7 = 8
  });

  test("Example 2", () => {
    const calc = new Calculator(2);
    expect(calc.multiply(5).power(2).getResult()).toBe(100); // (2 * 5) ^ 2 = 100
  });

  test("Example 3", () => {
    const calc = new Calculator(20);
    expect(() => calc.divide(0).getResult()).toThrow(
      "Division by zero is not allowed"
    );
  });
});
