// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

//Solution
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let sortedCandidates = candidates.sort((a, b) => a - b);
    let output = [];
    function backtrack(startIndex, currentCombination, remainingTarget) {
        if (remainingTarget === 0) {
            output.push([...currentCombination]); // Save a copy
            return;
        }

        // Went over the target
        if (remainingTarget < 0) {
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {

            // Optimization because the array is sorted
            if (candidates[i] > remainingTarget) {
                break;
            }

            // Choose
            currentCombination.push(candidates[i]);

            // Explore
            backtrack(
                i, // use i, not i + 1, because numbers can be reused
                currentCombination,
                remainingTarget - candidates[i]
            );

            // Undo (backtrack)
            currentCombination.pop();
        }
    }

    backtrack(0, [], target);
    return output;
};