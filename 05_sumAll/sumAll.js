const sumAll = function(start, end) {
    if (!Number.isInteger(start) || !Number.isInteger(end)) return 'ERROR';
    if (start < 0 || end < 0) return 'ERROR';
    if (end < start) {
        const endCopy = end;
        end = start;
        start = endCopy;
    }
    const numbers = range(start, end);
    let sum = 0;
    for (const number of numbers) {
        sum += number;
    }
    return sum;
};

function range(start, end) {
    if (start === end) return [start];
    return [start, ...range(start + 1, end)];
}

// Do not edit below this line
module.exports = sumAll;
