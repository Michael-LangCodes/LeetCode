// There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

// Return the maximum distance between two houses with different colors.

// The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

//Solution
var maxDistance = function(colors) {
    let n = colors.length;
    let max = 0;

    // Compare from the left
    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            max = Math.max(max, i);
            break;
        }
    }

    // Compare from the right
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            max = Math.max(max, n - 1 - i);
            break;
        }
    }

    return max;
};