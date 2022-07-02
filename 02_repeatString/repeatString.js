const repeatString = function(inputString, nTimes) {
    let repeatedString = '';

    if (nTimes < 0) {
        return 'ERROR';
    }

    for (let i = 1; i <= nTimes; i++) {
        repeatedString += inputString;
    }
    return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
