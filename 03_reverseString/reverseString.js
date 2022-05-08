const reverseString = function(string1) {
    let reversedString = '';
    for (let i = string1.length-1;i >= 0;i--) {
        reversedString += string1[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
