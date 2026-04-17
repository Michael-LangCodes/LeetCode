// You are given a circular array nums and an array queries.

// For each query i, you have to find the following:

// The minimum distance between the element at index queries[i] and any other index j in the circular array, where nums[j] == nums[queries[i]]. If no such index exists, the answer for that query should be -1.
// Return an array answer of the same size as queries, where answer[i] represents the result for query i.

//Solution
var solveQueries = function(nums, queries) {
    let map = {};      // value -> indices
    let posMap = {};   // index -> position in its value array
    let n = nums.length;

    // Build maps
    nums.forEach((val, i) => {
        if (!map[val]) map[val] = [];
        map[val].push(i);
    });

    // Build position map (O(n))
    for (let val in map) {
        let arr = map[val];
        arr.forEach((idx, i) => {
            posMap[idx] = i;
        });
    }

    let output = [];

    for (let q of queries) {
        let val = nums[q];
        let arr = map[val];

        if (arr.length === 1) {
            output.push(-1);
            continue;
        }

        let idx = posMap[q]; // O(1) now ✅

        let left = arr[(idx - 1 + arr.length) % arr.length];
        let right = arr[(idx + 1) % arr.length];

        let d1 = Math.abs(q - left);
        let d2 = Math.abs(q - right);

        let distLeft = Math.min(d1, n - d1);
        let distRight = Math.min(d2, n - d2);

        output.push(Math.min(distLeft, distRight));
    }

    return output;
};