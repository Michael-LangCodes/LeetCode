// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

//Solution
var twoSum = function(nums, target) {
 for (let i = 0; i < nums.length; i++) {
        let num2 = nums.slice(i + 1);
        for (let s = 0; s < num2.length; s++) {
            if (nums[i] + num2[s] === target) {
                return [i, s + i + 1];
            }
        }
    }
};