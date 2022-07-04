const palindromes = function (string) {
    const stringClean = string.replace(/[,!. ]/g, '').toLowerCase();
    const stringReverse = reverseString(stringClean);
    return stringClean == stringReverse;
};

const reverseString = function(inString) {
    return inString.split('').reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
