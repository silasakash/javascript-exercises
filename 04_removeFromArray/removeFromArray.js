const removeFromArray = function(userArray, ...args) {
    let arrayOp = userArray;
    for (let arg of args) {
        if (arrayOp.includes(arg)) {
            let index = arrayOp.indexOf(arg);
            arrayOp.splice(index,1);
        }
    }
    return arrayOp;
};

// Do not edit below this line
module.exports = removeFromArray;
