// Day 11:
// Memoize

// Given a function fn, return a memoized version of that function.

// A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

// You can assume there are 3 possible input functions: sum, fib, and factorial.

// sum accepts two integers a and b and returns a + b. Assume that if a value has already been cached for the arguments (b, a) where a != b, it cannot be used for the arguments (a, b). For example, if the arguments are (3, 2) and (2, 3), two separate calls should be made.
// fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
// factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

// Memoization is a technique used to optimize functions that are expensive to compute or have repeated computations with the same input.
// The cache is usually implemented as an object or a map that stores the previously computed results.
// When the memoized function is called with a new input, it first checks if the input exists in the cache. If it does, it returns the cached value.
// If it doesn't, it computes the result, stores it in the cache, and returns it

function memoize(fn) {
  // const cache = new Map();

  // return function (...args) {
  //   let key = JSON.stringify(args);
  //   if (cache.has(key)) {
  //     return cache.get(key);
  //   } else {
  //     let ans = fn(...args);
  //     cache.set(key, ans);
  //     return ans;
  //   }
  // };

  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }

    cache[key] = fn(...args);
    return cache[key];
  };
}

module.exports = { memoize };
