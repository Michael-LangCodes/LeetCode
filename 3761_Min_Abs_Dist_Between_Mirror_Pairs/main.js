// You are given an integer array nums.

// A mirror pair is a pair of indices (i, j) such that:

// 0 <= i < j < nums.length, and
// reverse(nums[i]) == nums[j], where reverse(x) denotes the integer formed by reversing the digits of x. Leading zeros are omitted after reversing, for example reverse(120) = 21.
// Return the minimum absolute distance between the indices of any mirror pair. The absolute distance between indices i and j is abs(i - j).

// If no mirror pair exists, return -1.

//My Solution
var minMirrorPairDistance = function(nums) {
     const mapReverse = new Map(); 
     let min = Infinity;
     const reverseNum = (x) => { 
        return parseInt(x.toString().split('').reverse().join(''), 10); 
        }; 
    for (let i = 0; i < nums.length; i++) { 
        const curr = nums[i]; 
        const reversed = reverseNum(curr); 

        if (mapReverse.has(curr)) { 
            const prevIndex = mapReverse.get(curr);     
            if (reverseNum(nums[prevIndex]) === curr) { 
            min = Math.min(min, i - prevIndex); 
            }
        } 
            // Always update with latest index 
            mapReverse.set(reversed,i) 
            } 
    return min === Infinity ? -1 : min; 
};