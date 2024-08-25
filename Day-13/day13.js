// DAY 13: Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
   await new Promise((resolve , reject) => setTimeout(resolve, millis));
   // Since is an async function , it returns a promise (resolves) , which doesn't need to return the Promise 
}

module.exports = { sleep };
