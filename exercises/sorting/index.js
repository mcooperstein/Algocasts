// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for(let i = 0; i<arr.length; i++){
    for(let j=0; j<(arr.length-i-1); j++){
      if(arr[j]>arr[j+1]){
        const lesser = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for(let i =0; i<arr.length; i++){
    let indexOfMin = i;
    for(let j=(i+1); j<arr.length;j++){
      if(arr[j]<arr[indexOfMin]){
        indexOfMin = j;
      }
    }
    if(indexOfMin !== i){
      let lesser = arr[indexOfMin];
      arr[indexOfMin]= arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}
//recursive solution - 2 separate functions
function mergeSort(arr) {
  if(arr.length===1){
    return arr;
  }

  const center = Math.floor(arr.length/2);
  const left = arr.slice(0,center);
  const right = arr.slice(center,arr.length);

  return merge(mergeSort(left),mergeSort(right));
}
//iterative solution - takes 2 sorted arrays
// and joins them together in a sorted order
function merge(left, right) {
  let results = [];
  while(left.length>0 && right.length>0){
    if(left[0]<=right[0]){
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  // if(right.length>0){
  //   results.push(...right);
  // } else if(left.length>0) {
  //   results.push(...left);
  // }
  // return results;
  return [...results,...left,...right];
}

//mergeSort([17,2,-40,9,1,13]) -> merge([-40,2,17], [1,9,13])

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
