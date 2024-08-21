// DAY 9:
// Return Length of Arguments Passed

// Write a function argumentsLength that returns the count of arguments passed to it.

const argumentsLength = function (...args) {
  //   let count = 0;

  //   for (let i = 0; i < args.length; i++) {
  //     count++;
  //   }
  //   return count;
  return args.length;
};

module.exports = { argumentsLength };
