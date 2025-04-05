// Example 1:

// Input:
// t = 50
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 75, inputs: [2]}
// ]
// Output: [{"t": 125, inputs: [2]}]
// Explanation:
// let start = Date.now();
// function log(...inputs) {
//   console.log([Date.now() - start, inputs ])
// }
// const dlog = debounce(log, 50);
// setTimeout(() => dlog(1), 50);
// setTimeout(() => dlog(2), 75);

// The 1st call is cancelled by the 2nd call because the 2nd call occurred before 100ms
// The 2nd call is delayed by 50ms and executed at 125ms. The inputs were (2).

// Example 2:

// Input:
// t = 20
// calls = [
//   {"t": 50, inputs: [1]},
//   {"t": 100, inputs: [2]}
// ]
// Output: [{"t": 70, inputs: [1]}, {"t": 120, inputs: [2]}]
// Explanation:
// The 1st call is delayed until 70ms. The inputs were (1).
// The 2nd call is delayed until 120ms. The inputs were (2).

// Example 3:

// Input:
// t = 150
// calls = [
//   {"t": 50, inputs: [1, 2]},
//   {"t": 300, inputs: [3, 4]},
//   {"t": 300, inputs: [5, 6]}
// ]
// Output: [{"t": 200, inputs: [1,2]}, {"t": 450, inputs: [5, 6]}]
// Explanation:
// The 1st call is delayed by 150ms and ran at 200ms. The inputs were (1, 2).
// The 2nd call is cancelled by the 3rd call
// The 3rd call is delayed by 150ms and ran at 450ms. The inputs were (5, 6).

const { debounce } = require("./day18");

describe("debounce function", () => {
  // Mock timers for all tests
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("Example 1: Cancels first call when second occurs before timeout", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 50);

    // Call at t=50
    setTimeout(() => debouncedFn(1), 50);

    // Call at t=75
    setTimeout(() => debouncedFn(2), 75);

    // Fast-forward time
    jest.advanceTimersByTime(124);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance just enough to trigger the debounced function
    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenLastCalledWith(2);
  });

  test("Example 2: Both calls execute with sufficient delay between them", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 20);

    // Call at t=50
    setTimeout(() => debouncedFn(1), 50);

    // Call at t=100
    setTimeout(() => debouncedFn(2), 100);

    // Fast-forward to just before first call should execute
    jest.advanceTimersByTime(69);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance to trigger first call
    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenLastCalledWith(1);

    // Advance to just before second call should execute
    jest.advanceTimersByTime(49);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Advance to trigger second call
    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith(2);
  });

  test("Example 3: Multiple calls with multiple parameters", () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 150);

    // Call at t=50 with args [1, 2]
    setTimeout(() => debouncedFn(1, 2), 50);

    // Call at t=300 with args [3, 4]
    setTimeout(() => debouncedFn(3, 4), 300);

    // Call at t=300 with args [5, 6]
    setTimeout(() => debouncedFn(5, 6), 300);

    // Fast-forward to just before first call should execute
    jest.advanceTimersByTime(199);
    expect(mockFn).not.toHaveBeenCalled();

    // Advance to trigger first call
    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenLastCalledWith(1, 2);

    // The second call is cancelled by the third call
    // Fast-forward to just before third call should execute
    jest.advanceTimersByTime(249);
    expect(mockFn).toHaveBeenCalledTimes(1);

    // Advance to trigger third call
    jest.advanceTimersByTime(1);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenLastCalledWith(5, 6);
  });
});
