/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
   const start = Date.now(); //10
   return new Promise(function(resolve){
         while(Date.now() < start + seconds){
         }
         resolve();
   })
}

module.exports = sleep;
