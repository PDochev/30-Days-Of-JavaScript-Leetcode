// DAY 3: Write a function expect that helps developers test their code.
// It should take in any value val and return an object with the following two functions.

// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".



var toBeOrNotToBe = function (val) {
  const toBe = function (num) {
    if (num === val) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };

  const notToBe = function (num) {
    if (val !== num) {
      return true;
    } else {
      throw new Error("Equal");
    }
  };

  return { toBe, notToBe };
};

module.exports = { toBeOrNotToBe };
