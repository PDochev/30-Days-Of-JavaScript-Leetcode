// DAY 1: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const { createHelloWorld } = require("./day1");

describe("createHelloWorld", () => {
  test('should return "Hello World" when called with no arguments', () => {
    const f = createHelloWorld();
    expect(f()).toBe("Hello World");
  });

  test('should return "Hello World" when called with any arguments', () => {
    const f = createHelloWorld();
    expect(f(1, 2, 3)).toBe("Hello World"); // Call with numbers
    expect(f({}, null, 42)).toBe("Hello World"); // Call with various types
    expect(f("some string", true)).toBe("Hello World"); // Call with string and boolean
    expect(f(undefined)).toBe("Hello World"); // Call with undefined
  });
});
