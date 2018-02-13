/*function findLongestWord(str) {
    var spaces = 0;
    var words = 0;
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == " ") {
            spaces++
        }
    }
    if (spaces == 0) {
        words = 1
    } else if (spaces == 1) {
        words = 2
    } else {
        words = spaces + 1
    }
    for (var i = 0; i < words; i++) {
        arr.push([]);
    }
    var j = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] != " ") {
            arr[j].push(str[i])
        } else {
            j++
        }
    }
    var length = 0;
    for (var k = 0; k < arr.length; k++) {
        if (arr[k].length > length) {
            length = arr[k].length
        }
    }
    return length;
}*/

function findLongestWord(str) {
    var words = str.split(' ');
    var longest = 0;
    for (var i = 0; i < words.length; i++) {
        if (words[i].length > longest) {
            longest = words[i].length
        }
    }
    return longest;
}

module.exports = findLongestWord;
