/*
One of the simplest and most widely known ciphers is a Caesar cipher,
also known as a shift cipher. In a shift cipher the meanings
of the letters are shifted by some set amount.
A common modern use is the ROT13 cipher, where the values of the letters
are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
Write a function which takes a ROT13 encoded string as input
and returns a decoded string.
All letters will be uppercase. Do not transform any
non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

function rot13(str) {
    //first we split the string to get an array with each character
    return str.split("")
        //then we iterate over each character
        .map.call(str, function (char) {
            //convert char to charCode
            x = char.charCodeAt(0);
            //check if character is between A-Z
            if (x < 65 || x > 90) {
                return String.fromCharCode(x); //if out of range, leave as is
            } else if (x < 78) {
                return String.fromCharCode(x + 13);
            } else {
                return String.fromCharCode(x - 13);
            }
        }).join(""); //rejoin characters
}

//advanced solution from FCC
function rot13(str) {
    return str.replace(/[A-Z]/g, L => String.fromCharCode((L.charCodeAt(0) % 26) + 65));
}
//uses regex to replace all capital Letters with a new character calculated from the arrow funciton
//uses fromCharCode method to convert number generated from inner charCodeAt function into new letter
//65 maps to 13 which is used as an offset to calculate the charCode

module.exports = rot13;
