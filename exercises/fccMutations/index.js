/*
Return true if the string in the first element of the array contains
all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of
the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because
the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true
because all of the letters in "line" are present in "Alien".
*/

//my basic solution
function mutation(arr) {
    for (var i = 0; i < arr[1].length; i++) {
        var letterFound = 0;
        for (var j = 0; j < arr[0].length; j++) {
            if (arr[1][i].toLowerCase() == arr[0][j].toLowerCase()) {
                letterFound++;
            }
        }
        if (letterFound == 0) {
            return false;
        }
    }
    return true;
}


//free code camp solutions:
/*
function mutation(arr){
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for(var i=0; i<test.length; i++){
    if(target.indexOf(test[i])==-1){
      return false;
    }
  }
  return true;
  }


function mutation(arr){
    return arr[1].toLowerCase().split("").every(function(letter){
        return arr[0].toLowerCase().indexOf(letter) !== -1;
    });
}
*/

module.exports = mutation;

//mutation(["hello", "hey"]);
