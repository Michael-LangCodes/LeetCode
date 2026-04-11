// You are given an integer array nums.

// A tuple (i, j, k) of 3 distinct indices is good if nums[i] == nums[j] == nums[k].

// The distance of a good tuple is abs(i - j) + abs(j - k) + abs(k - i), where abs(x) denotes the absolute value of x.

// Return an integer denoting the minimum possible distance of a good tuple. If no good tuples exist, return -1.

//Solution
var minimumDistance = function(nums) {
    let map = {};

    nums.forEach((num, i) => {
        if (!map[num]) map[num] = [];
        map[num].push(i);
    });

    let min = Infinity;

    for (let key in map) {
        let arr = map[key];

        for (let i = 0; i <= arr.length - 3; i++) {
            let dist = 2 * (arr[i + 2] - arr[i]);
            min = Math.min(min, dist);
        }
    }

    return min === Infinity ? -1 : min;
};