// Given a string s, find the length of the longest substring without duplicate characters.

//Solution
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let map = {};        // stores last index of each char
    let left = 0;        // start of window
    let max = 0;

    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // if duplicate found inside window, move left pointer
        if (map[char] !== undefined && map[char] >= left) {
            left = map[char] + 1;
        }

        // update last seen index
        map[char] = right;

        // update max length
        max = Math.max(max, right - left + 1);
    }

    return max;
};