// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

//Solution
var majorityElement = function(nums) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.set(nums[i],map.get(nums[i]) + 1);
        }else{
            map.set(nums[i],1);
        }
    }
    let max=0;
    let output;
    for(const[key,value] of map){
        if(value>max){
            output=key;
            max=value;
        }
    }
    return output;
};