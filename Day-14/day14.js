// DAY 14: Timeout Cancellation

// Given a function fn, an array of arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// Initially, the execution of the function fn should be delayed by t milliseconds.

// If, before the delay of t milliseconds, the function cancelFn is invoked, it should cancel the delayed execution of fn. Otherwise, if cancelFn is not invoked within the specified delay t, fn should be executed with the provided args as arguments.

const cancellable = function (fn, args, t) {
  // const timer = setTimeout(() => {
  //  fn(...args)
  // } , t)
  // const cancelFn = function(){
  //  clearTimeout(timer)
  // }
  // return cancelFn

  const timerId = setTimeout(fn, t, ...args);
  const cancelFn = () => {
    clearTimeout(timerId);
  };
  return cancelFn;
};
module.exports = { cancellable };
