// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/*function reverseInt(n) {
    var arr = n.toString().split("").reverse()
    var reversed = "";
    if (n == 0) {
        return 0
    } else if (arr[arr.length - 1] != "-") {
        for (var i = 0; i < arr.length; i++) {
            if (arr[0] == 0) {
                arr.shift()
            }
        }
        for (var i = 0; i < arr.length; i++) {
            reversed += arr[i]
        }
        return parseInt(reversed)
    } else {
        for (var i = 0; i < arr.length; i++) {
            if (arr[0] == 0) {
                arr.shift()
            }
        }
        for (var i = 0; i < arr.length - 1; i++) {
            reversed += arr[i]
        }
        return parseInt(reversed) * -1
    }
    //debugger;
}*/

//instructor solution
function reverseInt(n){
  const reversed = n.toString().split("").reverse().join("");
  //parseInt removes any zeros at beginning and Math.sign
  //converts to a negative number if original value is negative
  return parseInt(reversed)*Math.sign(n);
}

//reverseInt(12345)

module.exports = reverseInt;
