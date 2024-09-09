// DAY 17: Cache With Time Limit

// Write a class that allows getting and setting key-value pairs, however a time until expiration is associated with each key.

// The class has three public methods:

// set(key, value, duration): accepts an integer key, an integer value, and a duration in milliseconds. Once the duration has elapsed, the key should be inaccessible. The method should return true if the same un-expired key already exists and false otherwise. Both the value and duration should be overwritten if the key already exists.

// get(key): if an un-expired key exists, it should return the associated value. Otherwise it should return -1.

// count(): returns the count of un-expired keys.

const TimeLimitedCache = function () {
  this.cache = new Map();
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  const alreadyExist = this.cache.get(key);
  if (alreadyExist) {
    clearTimeout(alreadyExist.timeoutId);
  }

  const timeoutId = setTimeout(() => {
    this.cache.delete(key);
  }, duration);

  this.cache.set(key, { value, timeoutId });
  return Boolean(alreadyExist);
};

TimeLimitedCache.prototype.get = function (key) {
  if (this.cache.has(key)) {
    return this.cache.get(key).value;
  }

  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.cache.size;
};

module.exports = TimeLimitedCache;
