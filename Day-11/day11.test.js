// Example 1:
// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// "getCallCount" - total call count: 2

// Example 2:
// Input:
// fnName = "factorial"
// actions = ["call","call","call","getCallCount","call","getCallCount"]
// values = [[2],[3],[2],[],[3],[]]
// Output: [2,6,2,2,6,2]
// Explanation:
// const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
// const memoFactorial = memoize(factorial);
// memoFactorial(2); // "call" - returns 2.
// memoFactorial(3); // "call" - returns 6.
// memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
// "getCallCount" - total call count: 2
// memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
// "getCallCount" - total call count: 2

// Example 3:
// Input:
// fnName = "fib"
// actions = ["call","getCallCount"]
// values = [[5],[]]
// Output: [8,1]
// Explanation:
// fib(5) = 8 // "call"
// "getCallCount" - total call count: 1

const { memoize } = require("./day11");

describe("Memoize", () => {
  test("Example 1: Sum", () => {
    let callCount = 0;
    const memoizedSum = memoize(function (a, b) {
      callCount += 1;
      return a + b;
    });
    expect(memoizedSum(2, 3)).toBe(5);
    expect(callCount).toBe(1); //  memoizedFn was called as (2, 3) was not seen before.
    expect(memoizedSum(2, 3)).toBe(5);
    expect(callCount).toBe(1); //  However memoizedFn was not called because the same inputs were seen before.
    expect(memoizedSum(2, 4)).toBe(6);
    expect(callCount).toBe(2); // memoizedFn was called as (2, 4) was not seen before.
  });
  test("Example 2: Factorial", () => {
    let callCount = 0;

    const memoizedFactorial = memoize(function (n) {
      callCount += 1;
      return n <= 1 ? 1 : n * memoizedFactorial(n - 1);
    });

    // First call with n = 2
    expect(memoizedFactorial(2)).toBe(2);
    // First Call: memoizedFactorial(2) triggers two calculations: factorial(2) and factorial(1), so callCount should be 2.
    expect(callCount).toEqual(2);

    // Second call with n = 2 should use the cached result
    expect(memoizedFactorial(2)).toBe(2);
    // memoizedFactorial(2) returns the cached result, so callCount remains 2.
    expect(callCount).toEqual(2);

    // Call with n = 3
    expect(memoizedFactorial(3)).toBe(6);
    // Call with memoizedFactorial(3): This triggers one additional calculation (factorial(3)), but it uses the cached result for factorial(2), so callCount increments to 3.
    expect(callCount).toEqual(3);
  });
  test("Example 3: Fibonacci", () => {
    let callCount = 0;

    const memoizedFibonacci = memoize(function (n) {
      if (callCount === 0) {
        callCount += 1; // Only increment on the first (external) call
      }
      return n <= 1 ? 1 : memoizedFibonacci(n - 1) + memoizedFibonacci(n - 2);
    });

    // First call with n = 5 should return 8
    expect(memoizedFibonacci(5)).toBe(8);

    // Call count should be 1 because we only count the initial call, not the recursive ones
    expect(callCount).toEqual(1);
  });
});
