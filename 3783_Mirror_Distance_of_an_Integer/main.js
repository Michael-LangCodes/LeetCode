// You are given an integer n.

// Define its mirror distance as: abs(n - reverse(n))​​​​​​​ where reverse(n) is the integer formed by reversing the digits of n.

// Return an integer denoting the mirror distance of n​​​​​​​.

// abs(x) denotes the absolute value of x.

//My Solution
/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = parseInt(n.toString().split('').reverse().join(''), 10);
    return Math.abs(n-rev)
};