// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*function palindrome(str) {
    var reversed = str.split("").reverse().join("")
    if (reversed == str) {
        return true
    } else {
        return false
    }
}*/

function palindrome(str) {
    var reversed = str.split("").reduce((rev, char) => char + rev, "");
    if (reversed == str) {
        return true
    } else {
        return false
    }
}

module.exports = palindrome;

/*function palindrome(str) {
    var reversed = "";
    var arr = str.split("").reverse()
    for (let char of arr) {
        reversed += char
    }
    if (reversed == str) {
        return true
    } else {
        return false
    }
}*/

/*function palindrome(str) {
    var reversed = "";
    for (var i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed === str;
}*/


//most efficient solution per freecodecamp, removing whitespace and case insensitive
/*8
function palindrome(str) {
    let front = 0;
    let back = str.length - 1;
    while (back > front) {
        while (str[front].match(/[\W_]/)) {
            front++;
            continue;
        }
        while (str[back].match(/[\W_]/)) {
            back--;
            continue;
        }
        if (str[front].toLowerCase() !== str[back].toLowerCase()) {
            return false;
            front++;
            back--;
        }
    }
    return true;
}*/

//freecodecamp version -> removing non-alphanumeric characters with regex
/*

function palindrome(str) {
  // Good luck!
  var backwards = str.replace(/[\W_]/g, '').toLowerCase().split("").reverse().join("");
  var forwards = str.replace(/[\W_]/g,"").toLowerCase();
  return backwards == forwards;
}

palindrome("eye");
*/
