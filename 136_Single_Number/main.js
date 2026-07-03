// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

//My Solution
var singleNumber = function(nums) {
    let newMap = {};
    for(let i=0;i<nums.length;i++){
        if(newMap[nums[i]]){
            newMap[nums[i]] ++
        }else{
            newMap[nums[i]] =1
        }
    }
    for (const key in newMap) {
        if (newMap[key] === 1) {
            return Number(key); // Object keys are strings
        }
    }
};