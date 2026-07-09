// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly

//Solution
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    const result = new Array(num1.length + num2.length).fill(0);

    for (let i = num1.length - 1; i >= 0; i--) {
        for (let j = num2.length - 1; j >= 0; j--) {

            const digit1 = Number(num1[i]);
            const digit2 = Number(num2[j]);

            const product = digit1 * digit2;

            const p2 = i + j + 1;
            const p1 = i + j;

            const sum = product + result[p2];

            result[p2] = sum % 10;
            result[p1] += Math.floor(sum / 10);
        }
    }

    // Remove leading zeros
    let start = 0;
    while (start < result.length && result[start] === 0) {
        start++;
    }

    return result.slice(start).join('');
};