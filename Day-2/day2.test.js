// DAY 2: Given an integer n, return a counter function.
// This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
const { createCounter } = require("./day2");


describe("createCounter", () => {
  test("should return n on the first call and increment by 1 on subsequent calls", () => {
    const counter = createCounter(10);

    expect(counter()).toBe(10); // First call, should return 10
    expect(counter()).toBe(11); // Second call, should return 11
    expect(counter()).toBe(12); // Third call, should return 12
  });

  test("should work with negative starting values", () => {
    const counter = createCounter(-2);

    expect(counter()).toBe(-2); // First call, should return -2
    expect(counter()).toBe(-1); // Second call, should return -1
    expect(counter()).toBe(0); // Third call, should return 0
    expect(counter()).toBe(1); // Fourth call, should return 1
    expect(counter()).toBe(2); // Fifth call, should return 2
  });

  test("should work with zero as the starting value", () => {
    const counter = createCounter(0);

    expect(counter()).toBe(0); // First call, should return 0
    expect(counter()).toBe(1); // Second call, should return 1
    expect(counter()).toBe(2); // Third call, should return 2
  });
});
