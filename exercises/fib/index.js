// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// My solution
// function fib(n) {
//   let arr = [0,1];
//   if(n===0){
//     return 0;
//   } else if(n===1){
//     return 1;
//   } else {
//     for(let i=2; i<=n; i++){
//       arr[i]=arr[i-2]+arr[i-1];
//     }
//   }
//   return arr[n];
// }

//Memoize function
function memoize(fn){
const cache = {};
  // not sure how many arguments will be supplied
  return function(...args){
    if(cache[args]){
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

// Recursive solution
function fib(n){
  if(n<2){
    return n;
  }
  return fib(n-1) + fib(n-2);
}

fib = memoize(fib);

module.exports = fib;
