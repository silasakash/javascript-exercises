const removeFromArray = function(userArray, userArgument1=null,userArgument2=null,userArgument3=null,userArgument4=null) {
    let arrayOp = userArray;
    if (userArray.includes(userArgument1)) {
        const index1 = userArray.indexOf(userArgument1);
        userArray.splice(index1,1);
    }
    if (userArray.includes(userArgument2)) {
        const index2 = userArray.indexOf(userArgument2);
        userArray.splice(index2,1);
    }
    if (userArray.includes(userArgument3)) {
        const index3 = userArray.indexOf(userArgument3);
        userArray.splice(index3,1);
    }
    if (userArray.includes(userArgument4)) {
        const index4 = userArray.indexOf(userArgument4);
        userArray.splice(index4,1);
    }
    return arrayOp;
};

// Do not edit below this line
module.exports = removeFromArray;
