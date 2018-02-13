/*
You will be provided with an initial array (the first argument in the destroyer function),
followed by one or more arguments. Remove all elements from the initial array
that are of the same value as these arguments.
*/

function seekAndDestroy(arr) {
    var args = Array.prototype.slice.call(arguments);
    // makes an array with all the arguments supplied to the function
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < args.length; j++) {
            if (arr[i] == args[j]) {
                delete arr[i]
            }
        }
    }
    return arr.filter(Boolean)
        // the delete operator replaces the values in the array with null, so need to filter them out
}


//seekAndDestroy([1,2,3,3,2,1],2,3)

module.exports = seekAndDestroy;
