// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.

//Solution
var longestConsecutive = function(nums) {
    let numsSorted = nums.sort((a,b)=>a-b);
    if(numsSorted.length===0){
        return 0
    }
    let longest = 1;
    let count=1;
    for(let i=1;i<numsSorted.length;i++){
        let last = numsSorted[i-1];
        let current = numsSorted[i]
        if(current===last){
            if(i===numsSorted.length-1){
                if(count>longest){
                    longest=count;
                }
            }
            continue
        }else if(current-last===1){
            count++;
            if(i===numsSorted.length-1){
                if(count>longest){
                    longest=count;
                }
            }
        }else{
            if(count>longest){
                longest=count;
            }
            count=1;
        }
    }
    return longest;
};