/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */


function wait1(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t * 1000);
    })
}

function wait2(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t * 1000);
    })
}

function wait3(t) {
    return new Promise(function (resolve) {
        setTimeout(resolve, t * 1000);
    })
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    const p1 = wait1(t1);
    const p2 = p1.then(() => wait2(t2));
    const p3 = p2.then(() => wait3(t3));
    return p3.then(() => Date.now() - start);
}

module.exports = calculateTime;