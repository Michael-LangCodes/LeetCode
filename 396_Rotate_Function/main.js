// You are given an integer array nums of length n.

// Assume arrk to be an array obtained by rotating nums by k positions clock-wise. We define the rotation function F on nums as follow:

// F(k) = 0 * arrk[0] + 1 * arrk[1] + ... + (n - 1) * arrk[n - 1].
// Return the maximum value of F(0), F(1), ..., F(n-1).

// The test cases are generated so that the answer fits in a 32-bit integer.

//Solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxRotateFunction = function(nums) {
    const n = nums.length;
    
    let sum = 0;
    let F = 0;
    
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        F += i * nums[i];
    }
    
    let max = F;
    
    for (let k = 1; k < n; k++) {
        F = F + sum - n * nums[n - k];
        max = Math.max(max, F);
    }
    
    return max;
};