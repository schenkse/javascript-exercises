const removeFromArray = function(inArray, ...args) {
    let outArray = inArray;
    for (const arg of args) {
        outArray = outArray.filter(element => element !== arg);
    }
    return outArray;
};

// Do not edit below this line
module.exports = removeFromArray;
