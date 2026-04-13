// Given an integer array nums (0-indexed) and two integers target and start, find an index i such that nums[i] == target and abs(i - start) is minimized. Note that abs(x) is the absolute value of x.

// Return abs(i - start).

// It is guaranteed that target exists in nums.

//My Solution
var getMinDistance = function(nums, target, start) {
    let match_indx = [];
    let min = Infinity;
    nums.forEach((e,i)=>{
        if(e===target){
            let check_min = Math.abs(i-start);
            if (check_min < min){
            min = check_min
        }
        }
    })
    return min
};