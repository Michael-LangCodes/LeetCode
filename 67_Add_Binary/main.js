// Given two binary strings a and b, return their sum as a binary string.

//Solution
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let output = "";

    while (i >= 0 || j >= 0 || carry) {
        let sum = carry;

        if (i >= 0) sum += Number(a[i--]);
        if (j >= 0) sum += Number(b[j--]);

        output = (sum % 2) + output;
        carry = Math.floor(sum / 2);
    }

    return output;
};