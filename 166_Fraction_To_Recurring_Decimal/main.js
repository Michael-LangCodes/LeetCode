// Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

// If the fractional part is repeating, enclose the repeating part in parentheses

// If multiple answers are possible, return any of them.

// It is guaranteed that the length of the answer string is less than 104 for all the given inputs.

// Note that if the fraction can be represented as a finite length string, you must return it.

//Solution
var fractionToDecimal = function(numerator, denominator) {
    if (numerator === 0) return "0";
    
    let negative = (numerator < 0) !== (denominator < 0);

    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);

    let output = [Math.floor(numerator / denominator).toString()];
    let remainder = numerator % denominator;

    if (remainder === 0) {
        if (negative) output.unshift('-');
        return output.join('');
    }

    output.push('.');

    let map = new Map();

    while (remainder !== 0) {

        if (map.has(remainder)) {
            let start = map.get(remainder);
            output.splice(start, 0, '(');
            output.push(')');
            break;
        }

        map.set(remainder, output.length);

        remainder *= 10;
        output.push(Math.floor(remainder / denominator).toString());
        remainder %= denominator;
    }

    if (negative) output.unshift('-');

    return output.join('');
};