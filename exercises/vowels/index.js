// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  let numVowels = 0;
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for(let i =0; i<str.length; i++){
    if(vowels.includes(str[i].toLowerCase())){
      numVowels++
    }
  }
  return numVowels;
}

module.exports = vowels;
