const repeatString = function(string,num) {
    let opString = '';
    for (let i = 1;i <= num; i++) {
        opString += string;
    }
    if (num < 0) return "ERROR";
    return opString;
};

// Do not edit below this line
module.exports = repeatString;
