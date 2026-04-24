// You are given a 0-indexed integer array nums. There exists an array arr of length nums.length, where arr[i] is the sum of |i - j| over all j such that nums[j] == nums[i] and j != i. If there is no such j, set arr[i] to be 0.

// Return the array arr.

//Solution
var distance = function(nums) {
    const map = new Map();
    
    // Step 1: group indices
    nums.forEach((num, i) => {
        if (!map.has(num)) map.set(num, []);
        map.get(num).push(i);
    });

    const res = Array(nums.length).fill(0);

    // Step 2: process each group
    for (let indices of map.values()) {
        let n = indices.length;
        let prefixSum = 0;

        // Left pass
        for (let i = 0; i < n; i++) {
            let idx = indices[i];
            res[idx] += idx * i - prefixSum;
            prefixSum += idx;
        }

        // Right pass
        prefixSum = 0;
        for (let i = n - 1; i >= 0; i--) {
            let idx = indices[i];
            res[idx] += prefixSum - idx * (n - 1 - i);
            prefixSum += idx;
        }
    }

    return res;
};