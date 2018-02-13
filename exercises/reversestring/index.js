// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*function reverse(str) {
    var newStr = "";
    var myArr = [];
    for (var i = str.length - 1; i >= 0; i--) {
        myArr.push(str[i])
    }
    for (var j = 0; j < myArr.length; j++) {
        newStr += myArr[j]
    }
    return newStr;
}*/

/*function reverse(str) {
    return str.split("").reverse().join("")
}*/

function reverse(str) {
    let reversed = ""
    for (let character of str) {
        reversed = character + reversed
            //debugger;
    }
    return reversed
}

//reverse("Azubuike")

/*function reverse(str) {
    return str.split("").reduce((rev, char) => char + rev, "")
}*/

module.exports = reverse;
