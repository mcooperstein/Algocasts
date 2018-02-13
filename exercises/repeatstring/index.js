// ternary operator version
function repeat(str, num) {
    return (num > 0) ? str.repeat(num) : "";
}

// longer version
/*function repeatV2(str,num){
    if(num>0){
        return str.repeat(num);
    } else {
        return "";
    }
}*/


module.exports = repeat;
