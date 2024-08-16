// DAY 1: Write a function createHelloWorld. It should return a new function that always returns "Hello World".

const createHelloWorld = function () {
  return function () {
    return "Hello World";
  };
};

module.exports = { createHelloWorld };
