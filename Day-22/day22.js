// DAY22 Array Prototype Last

// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.

// You may assume the array is the output of JSON.parse.

Array.prototype.last = function () {
  if (this.length) {
    return this[this.length - 1];
  }
  return -1;
};

let arr = [1, 2, 3, 4, 5];
console.log(arr.last()); // 5
console.log(Object.getOwnPropertyNames(Array.prototype));
console.log(Object.getPrototypeOf(arr));

module.exports = {
  last: Array.prototype.last,
};
