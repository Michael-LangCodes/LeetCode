// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".


//Solution
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    for (let i = 0; i < strs[0].length; i++) {
        
        for (let x = 1; x < strs.length; x++) {

            // mismatch OR string too short
            if (strs[x][i] !== strs[0][i]) {
                return strs[0].slice(0, i);
            }
        }
    }

    // entire first string is common prefix
    return strs[0];
};