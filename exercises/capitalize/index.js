// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

//my solution
function capitalize(str) {
  let newStr = str.split(" ");
  let newArr = [];
  for (let i =0; i<newStr.length; i++){
    newArr.push(newStr[i][0].toUpperCase()+newStr[i].slice(1))
  }
  return newArr.join(" ");
}

//instructor solution
function capitalize(str){
  const words = [];
  for(let word of str.split(' ')){
    words.push(word[0].toUpperCase()+word.slice(1));
  }
  return words.join(' ');
}
// another solution

function capitalize(str){
  let result = str[0].toUpperCase()
  for(let i =1; i <str.length; i++){
    if(str[i-1]===" "){
      result+=str[i].toUpperCase();
    } else {
      result+=str[i];
    }
  }
  return result;
}

module.exports = capitalize;
