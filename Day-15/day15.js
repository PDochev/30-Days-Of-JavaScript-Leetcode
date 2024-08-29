// DAY 15: Interval Cancellation

// Given a function fn, an array of arguments args, and an interval time t, return a cancel function cancelFn.

// After a delay of cancelTimeMs, the returned cancel function cancelFn will be invoked.

// setTimeout(cancelFn, cancelTimeMs)
// The function fn should be called with args immediately and then called again every t milliseconds until cancelFn is called at cancelTimeMs ms.


const cancellable = function(fn, args, t) {
    fn(...args)
    const timerId = setInterval(fn, t, ...args);

    const cancelFn = () => {
        clearInterval(timerId)
    }
    return cancelFn;
};

module.exports = {cancellable}