// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// My Solution
// function vowels(str) {
//   let numVowels = 0;
//   let vowels = ['a', 'e', 'i', 'o', 'u'];
//   for(let i =0; i<str.length; i++){
//     if(vowels.includes(str[i].toLowerCase())){
//       numVowels++
//     }
//   }
//   return numVowels;
// }

// Instructor Iterative Solution
// function vowels(str){
//   let count = 0;
//   const checker = ['a', 'e', 'i', 'o','u'];
//   for(let char of str.toLowerCase()){
//     if(checker.includes(char)){
//       count++;
//     }
//   }
//   return count;
// }

// Instructor RegEx Solution

function vowels(str){
  const matches = str.match(/[aeiou]/gi);
  //matches will either return an array of
  //matches or null
  return matches ? matches.length: 0;
}

module.exports = vowels;
