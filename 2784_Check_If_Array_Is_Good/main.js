// You are given an integer array nums. We consider an array good if it is a permutation of an array base[n].

// base[n] = [1, 2, ..., n - 1, n, n] (in other words, it is an array of length n + 1 which contains 1 to n - 1 exactly once, plus two occurrences of n). For example, base[1] = [1, 1] and base[3] = [1, 2, 3, 3].

// Return true if the given array is good, otherwise return false.

//My Solution
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isGood = function(nums) {
    let target = nums.length-1;
    let output = true
    let indexRemove = 0;
    console.log(target)
    for (let i=1; i<=target;i++){
        if(nums.includes(i)){
            indexRemove = nums.indexOf(i)
            nums.splice(indexRemove,1)
            continue
        }else{
            output = false
            break
        }
    }
    if(nums.length ===1 && nums[0]===target){

    }else{
        output = false
    }
    return output
};