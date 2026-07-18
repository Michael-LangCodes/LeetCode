// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

//My Solution
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for(let i=0;i<nums.length;i++){
        if(map.has(nums[i])){
            map.get(nums[i]).push(i);
        }else{
            map.set(nums[i],[i])
        }
    }
    console.log(map)
    for(const [key,value] of map){
        if(value.length>1){
            for(let x=1;x<value.length;x++){
                let current = value[x]-value[x-1];
                console.log(current)
                if(current <= k){
                    return true
                }
            }
        }
    }
    return false
};