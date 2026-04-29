// You are given a 2D integer grid of size m x n and an integer x. In one operation, you can add x to or subtract x from any element in the grid.

// A uni-value grid is a grid where all the elements of it are equal.

// Return the minimum number of operations to make the grid uni-value. If it is not possible, return -1.

//Solution
var minOperations = function(grid, x) {
    let nums = grid.flat();
    
    nums.sort((a, b) => a - b);
    
    let target = nums[Math.floor(nums.length / 2)];
    let remainder = target % x;
    
    let operations = 0;
    
    for (let num of nums) {
        if (num % x !== remainder) {
            return -1;
        }
        operations += Math.abs(num - target) / x;
    }
    
    return operations;
};