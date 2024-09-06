const { timeLimit } = require("./day16");

describe("Promise Time Limit", () => {
  test("Example 1: The provided function is set to resolve after 100ms. However, the time limit is set to 50ms. It rejects at t=50ms because the time limit was reached", async () => {
    const fn = async (n) => {
      await new Promise((res) => setTimeout(res, 100)); // resolves after 100ms
      return n * n;
    };

    const inputs = [5];
    const t = 50; // Time limit of 50ms

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      await limited(...inputs);
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    // Assert that it was rejected with "Time Limit Exceeded"
    expect(result.rejected).toBe("Time Limit Exceeded");
    // Assert that the time is around 50ms (allowing a slight margin for execution)
    expect(result.time).toBeGreaterThanOrEqual(50);
    expect(result.time).toBeLessThan(100);
  });
  test("Example 2: The function resolved 5 * 5 = 25 at t=100ms. The time limit is never reached.", async () => {
    const fn = async (n) => {
      await new Promise((res) => setTimeout(res, 100));
      return n * n;
    };

    const inputs = [5];
    const t = 150;

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs); // Call the time-limited version
      result = {
        resolved: res,
        time: Math.floor(performance.now() - start),
      };
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    expect(result.resolved).toBe(25);
    expect(result.time).toBeGreaterThanOrEqual(100);
    expect(result.time).toBeLessThan(150); // Ensuring it's within the time limit
  });
  test("Example 3: ​​​​The function resolved 5 + 10 = 15 at t=120ms. The time limit is never reached.", async () => {
    const fn = async (a, b) => {
      await new Promise((res) => setTimeout(res, 120));
      return a + b;
    };

    const inputs = [5, 10];
    const t = 150;

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      const res = await limited(...inputs); // Call the time-limited version
      result = {
        resolved: res,
        time: Math.floor(performance.now() - start),
      };
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    expect(result.resolved).toBe(15);
    expect(result.time).toBeGreaterThanOrEqual(120);
    expect(result.time).toBeLessThan(130); // Ensuring it's within the time limit
  });
  test("Example 4: The function immediately throws an error", async () => {
    const fn = async () => {
      throw "Error";
    };

    const inputs = [];
    const t = 1000;

    const limited = timeLimit(fn, t);
    const start = performance.now();

    let result;

    try {
      await limited(...inputs);
    } catch (err) {
      result = {
        rejected: err,
        time: Math.floor(performance.now() - start),
      };
    }

    expect(result.rejected).toBe("Error");
    expect(result.time).toBeGreaterThanOrEqual(0);
    expect(result.time).toBeLessThan(10);
  });
});
