// Example 1:
// Input: fn = (x) => x * 5, args = [2], t = 20
// Output: [{"time": 20, "returned": 10}]
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x * 5, [2], 20);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.

// Example 2:
// Input: fn = (x) => x**2, args = [2], t = 100
// Output: []
// Explanation:
// const cancelTimeMs = 50;
// const cancelFn = cancellable((x) => x**2, [2], 100);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.

// Example 3:
// Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
// Output: [{"time": 30, "returned": 8}]
// Explanation:
// const cancelTimeMs = 100;
// const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
// setTimeout(cancelFn, cancelTimeMs);

// The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.

const { cancellable } = require("./day14");

describe("cancellable function", () => {
  jest.useFakeTimers();

  afterEach(() => {
    jest.clearAllTimers();
  });

  test("Example 1: Function executes before cancellation", () => {
    const fn = jest.fn((x) => x * 5);
    const t = 20;
    const args = [2];
    const cancelFn = cancellable(fn, args, t);
    const cancelTimeMs = 50;

    setTimeout(cancelFn, cancelTimeMs);

    jest.advanceTimersByTime(20);
    expect(fn).toHaveBeenCalledWith(2);
    expect(fn).toHaveReturnedWith(10);

    jest.advanceTimersByTime(30);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test("Example 2: Function is cancelled before execution", () => {
    const fn = jest.fn((x) => x ** 2);
    const t = 100;
    const args = [2];
    const cancelFn = cancellable(fn, args, t);
    const cancelTimeMs = 50;

    setTimeout(cancelFn, cancelTimeMs);

    jest.advanceTimersByTime(50);
    expect(fn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(50);
    expect(fn).not.toHaveBeenCalled();
  });

  test("Example 3: Function with multiple arguments executes before cancellation", () => {
    const fn = jest.fn((x1, x2) => x1 * x2);
    const t = 30;
    const args = [2, 4];
    const cancelFn = cancellable(fn, args, t);
    const cancelTimeMs = 100;

    setTimeout(cancelFn, cancelTimeMs);

    jest.advanceTimersByTime(30);
    expect(fn).toHaveBeenCalledWith(2, 4);
    expect(fn).toHaveReturnedWith(8);

    jest.advanceTimersByTime(70);
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
