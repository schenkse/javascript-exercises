const reverseString = function(inString) {
    const chars = inString.split("");
    const charsReverse = chars.reverse();
    let outString = '';

    for (const char of charsReverse) {
        outString += char;
    }
    return outString;
};

// Do not edit below this line
module.exports = reverseString;
