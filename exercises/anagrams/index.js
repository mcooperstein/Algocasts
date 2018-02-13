// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

/*function anagrams(stringA, stringB) {
  let newA = stringA.toLowerCase().replace(/[^\w]/g,"").split("");
  let newB = stringB.toLowerCase().replace(/[^\w]/g,"").split("");
  if(newA.length!==newB.length){
    return false;
  } else {
    for(let char of newA){
      if(!newB.includes(char)){
        return false;
      }
    }
    return true;
  }
}*/

/*function anagrams(stringA, stringB){
  let newA = stringA.toLowerCase().replace(/[^\w]/g,"").split("").sort();
  let newB = stringB.toLowerCase().replace(/[^\w]/g,"").split("").sort();
  if(newA.length!==newB.length){
    return false;
  } else {
    for(let i=0; i<newA.length; i++){
      if(newA[i]!==newB[i]){
        return false;
      }
    }
    return true;
  }
}*/

//write a helper function
function cleanString(str){
  return str.toLowerCase().replace(/[^\w]/g, "").split("").sort().join("");
}

function anagrams(stringA, stringB){
  return cleanString(stringA) === cleanString(stringB);
}

module.exports = anagrams;
