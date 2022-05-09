const leapYears = function(leapYear) {
    if (leapYear % 4 == 0) {
        if (leapYear % 100 == 0) {
            if (leapYear % 400 == 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
