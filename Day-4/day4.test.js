// Example 1:
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4

// Example 2:
// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
//counter.reset(); // 0
// counter.reset(); // 0

const { createCounter2 } = require("./day4");

describe("Counter II", () => {
  test("Example 1: should handle increment, reset, and decrement correctly with initial value 5", () => {
    const counter = createCounter2(5);
    const results = [
      counter.increment(), // Should return 6
      counter.reset(), // Should return 5
      counter.decrement(), // Should return 4
    ];
    expect(results).toEqual([6, 5, 4]);
  });

  test("Example 2: should handle multiple increments, decrement, and resets with initial value 0", () => {
    const counter2 = createCounter2(0);
    expect(counter2.increment()).toBe(1); // 1
    expect(counter2.increment()).toBe(2); // 2
    expect(counter2.decrement()).toBe(1); //
    expect(counter2.reset()).toBe(0); // 0
    expect(counter2.reset()).toBe(0); // 0
  });
});
