/*
We'll pass you an array of two numbers.
Return the sum of those two numbers and all numbers between them.
The lowest number will not always come first.
ex: sumAll([1, 4]);
*/

// my solution:

function sumAll(arr){
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  let sum = 0;
  for(let i=min; i<=max; i++){
    sum+=i;
  }
  return sum;
}

module.exports = sumAll;
