// Example 1:
// Input:
// actions = ["TimeLimitedCache", "set", "get", "count", "get"]
// values = [[], [1, 42, 100], [1], [], [1]]
// timeDelays = [0, 0, 50, 50, 150]
// Output: [null, false, 42, 1, -1]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 100ms. The value doesn't exist so false is returned.
// At t=50, key=1 is requested and the value of 42 is returned.
// At t=50, count() is called and there is one active key in the cache.
// At t=100, key=1 expires.
// At t=150, get(1) is called but -1 is returned because the cache is empty.

// Example 2:

// Input:
// actions = ["TimeLimitedCache", "set", "set", "get", "get", "get", "count"]
// values = [[], [1, 42, 50], [1, 50, 100], [1], [1], [1], []]
// timeDelays = [0, 0, 40, 50, 120, 200, 250]
// Output: [null, false, true, 50, 50, -1, 0]
// Explanation:
// At t=0, the cache is constructed.
// At t=0, a key-value pair (1: 42) is added with a time limit of 50ms. The value doesn't exist so false is returned.
// At t=40, a key-value pair (1: 50) is added with a time limit of 100ms. A non-expired value already existed so true is returned and the old value was overwritten.
// At t=50, get(1) is called which returned 50.
// At t=120, get(1) is called which returned 50.
// At t=140, key=1 expires.
// At t=200, get(1) is called but the cache is empty so -1 is returned.
// At t=250, count() returns 0 because the cache is empty.

const TimeLimitedCache = require("./day17");

describe("Cache With Time Limit", () => {
  let cache;
  jest.useFakeTimers();

  beforeEach(() => {
    cache = new TimeLimitedCache();
  });

  test("Example 1", () => {
    // Actions and values from Example 1
    expect(cache.set(1, 42, 100)).toBe(false); // t=0, add key=1, value=42, duration=100ms, returns false
    expect(cache.get(1)).toBe(42); // t=50, key=1 exists, returns 42
    jest.advanceTimersByTime(50); // Move forward by 50ms
    expect(cache.count()).toBe(1); // t=50, still 1 unexpired key
    jest.advanceTimersByTime(100); // Move forward by 100ms (total 150ms now)
    expect(cache.get(1)).toBe(-1); // t=150, key=1 expired, returns -1
  });

  test("Example 2", () => {
    // Actions and values from Example 2
    expect(cache.set(1, 42, 50)).toBe(false); // t=0, add key=1, value=42, duration=50ms, returns false
    jest.advanceTimersByTime(40); // Move forward by 40ms
    expect(cache.set(1, 50, 100)).toBe(true); // t=40, key=1 exists, overwrite with value=50, duration=100ms, returns true
    jest.advanceTimersByTime(10); // Move forward by 10ms (total 50ms)
    expect(cache.get(1)).toBe(50); // t=50, key=1 exists, returns 50
    jest.advanceTimersByTime(70); // Move forward by 70ms (total 120ms)
    expect(cache.get(1)).toBe(50); // t=120, key=1 still valid, returns 50
    jest.advanceTimersByTime(80); // Move forward by 80ms (total 200ms)
    expect(cache.get(1)).toBe(-1); // t=200, key=1 expired, returns -1
    expect(cache.count()).toBe(0); // t=250, no active keys, returns 0
  });
});
