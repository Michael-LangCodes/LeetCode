// Given an integer array nums of length n and an integer target, find three integers at distinct indices in nums such that the sum is closest to target.

//Solution
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);
    let result;
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let val = nums[i] + nums[left] + nums[right];
            if (
                result === undefined ||
                Math.abs(val - target) < Math.abs(result - target)
            ) {
                result = val;
            }
            if (val < target) {
                left++;
            } else if (val > target) {
                right--;
            } else {
                return target; // exact match
            }
        }
    }
    return result;
};