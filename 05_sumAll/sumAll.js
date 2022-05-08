const sumAll = function(no1,no2) {
    let sum = 0;
    let maxNo = no1;
    let minNo = no2;
    if (typeof no1 == "number" && typeof no2 == "number") {
        if (no1 < 0 || no2 < 0) {
            return "ERROR";
        }
        else if (no1 > no2) {
            maxNo = no1;
            minNo = no2;
        }
        else if (no1 < no2) {
            maxNo = no2;
            minNo = no1;
        }
    }
    else {
        return "ERROR";
    }
    for (let i = minNo;i <= maxNo;i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
