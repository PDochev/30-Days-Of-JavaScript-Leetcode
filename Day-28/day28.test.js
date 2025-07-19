// Example 1:

// Input:
// actions = ["EventEmitter", "emit", "subscribe", "subscribe", "emit"],
// values = [[], ["firstEvent"], ["firstEvent", "function cb1() { return 5; }"],  ["firstEvent", "function cb1() { return 6; }"], ["firstEvent"]]
// Output: [[],["emitted",[]],["subscribed"],["subscribed"],["emitted",[5,6]]]
// Explanation:
// const emitter = new EventEmitter();
// emitter.emit("firstEvent"); // [], no callback are subscribed yet
// emitter.subscribe("firstEvent", function cb1() { return 5; });
// emitter.subscribe("firstEvent", function cb2() { return 6; });
// emitter.emit("firstEvent"); // [5, 6], returns the output of cb1 and cb2

// Example 2:

// Input:
// actions = ["EventEmitter", "subscribe", "emit", "emit"],
// values = [[], ["firstEvent", "function cb1(...args) { return args.join(','); }"], ["firstEvent", [1,2,3]], ["firstEvent", [3,4,6]]]
// Output: [[],["subscribed"],["emitted",["1,2,3"]],["emitted",["3,4,6"]]]
// Explanation: Note that the emit method should be able to accept an OPTIONAL array of arguments.

// const emitter = new EventEmitter();
// emitter.subscribe("firstEvent, function cb1(...args) { return args.join(','); });
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// emitter.emit("firstEvent", [3, 4, 6]); // ["3,4,6"]

// Example 3:

// Input:
// actions = ["EventEmitter", "subscribe", "emit", "unsubscribe", "emit"],
// values = [[], ["firstEvent", "(...args) => args.join(',')"], ["firstEvent", [1,2,3]], [0], ["firstEvent", [4,5,6]]]
// Output: [[],["subscribed"],["emitted",["1,2,3"]],["unsubscribed",0],["emitted",[]]]
// Explanation:
// const emitter = new EventEmitter();
// const sub = emitter.subscribe("firstEvent", (...args) => args.join(','));
// emitter.emit("firstEvent", [1, 2, 3]); // ["1,2,3"]
// sub.unsubscribe(); // undefined
// emitter.emit("firstEvent", [4, 5, 6]); // [], there are no subscriptions

// Example 4:

// Input:
// actions = ["EventEmitter", "subscribe", "subscribe", "unsubscribe", "emit"],
// values = [[], ["firstEvent", "x => x + 1"], ["firstEvent", "x => x + 2"], [0], ["firstEvent", [5]]]
// Output: [[],["subscribed"],["subscribed"],["unsubscribed",0],["emitted",[7]]]
// Explanation:
// const emitter = new EventEmitter();
// const sub1 = emitter.subscribe("firstEvent", x => x + 1);
// const sub2 = emitter.subscribe("firstEvent", x => x + 2);
// sub1.unsubscribe(); // undefined
// emitter.emit("firstEvent", [5]); // [7]

const EventEmitter = require("./day28");

describe("Event Emitter", () => {
  test("Example 1", () => {
    const emitter = new EventEmitter();
    expect(emitter.emit("firstEvent")).toEqual([]); // No callbacks yet
    const sub1 = emitter.subscribe("firstEvent", () => 5);
    expect(sub1).toEqual({ unsubscribe: expect.any(Function) });
    const sub2 = emitter.subscribe("firstEvent", () => 6);
    expect(sub2).toEqual({ unsubscribe: expect.any(Function) });
    expect(emitter.emit("firstEvent")).toEqual([5, 6]); // Callbacks executed
  });
  test("Example 2", () => {
    const emitter = new EventEmitter();
    const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));
    expect(sub).toEqual({ unsubscribe: expect.any(Function) });
    expect(emitter.emit("firstEvent", [1, 2, 3])).toEqual(["1,2,3"]);
    expect(emitter.emit("firstEvent", [3, 4, 6])).toEqual(["3,4,6"]);
  });
  test("Example 3", () => {
    const emitter = new EventEmitter();
    const sub = emitter.subscribe("firstEvent", (...args) => args.join(","));
    expect(sub).toEqual({ unsubscribe: expect.any(Function) });
    expect(emitter.emit("firstEvent", [1, 2, 3])).toEqual(["1,2,3"]);
    expect(sub.unsubscribe()).toBeUndefined(); // Unsubscribe
    expect(emitter.emit("firstEvent", [4, 5, 6])).toEqual([]); // No subscriptions left
  });
  test("Example 4", () => {
    const emitter = new EventEmitter();
    const sub1 = emitter.subscribe("firstEvent", (x) => x + 1);
    expect(sub1).toEqual({ unsubscribe: expect.any(Function) });
    const sub2 = emitter.subscribe("firstEvent", (x) => x + 2);
    expect(sub2).toEqual({ unsubscribe: expect.any(Function) });
    expect(sub1.unsubscribe()).toBeUndefined(); // Unsubscribe first callback
    expect(emitter.emit("firstEvent", [5])).toEqual([7]); // Only second callback executed
  });
});
