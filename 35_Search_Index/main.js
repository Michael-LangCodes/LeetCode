// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

//My Solution
var searchInsert = function(nums, target) {
    let output;
    if(nums.indexOf(target)!==-1){
        output=nums.indexOf(target)
        console.log('Made it here')
    }else if(target>nums[nums.length-1]){
        output = nums.length;
    }
    else{
        let curr
        for(let i=0;i<nums.length;i++){
            let curr = nums[i];
            if(target<curr){
                output = i;
                break
            }
        }
    }
    return output
};