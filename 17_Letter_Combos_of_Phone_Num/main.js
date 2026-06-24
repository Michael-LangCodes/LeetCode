// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

//Solution
var letterCombinations = function(digits) {
    if (digits.length === 0) return [];

    const myMap = new Map([
        ['2', ['a', 'b', 'c']],
        ['3', ['d', 'e', 'f']],
        ['4', ['g', 'h', 'i']],
        ['5', ['j', 'k', 'l']],
        ['6', ['m', 'n', 'o']],
        ['7', ['p', 'q', 'r', 's']],
        ['8', ['t', 'u', 'v']],
        ['9', ['w', 'x', 'y', 'z']]
    ]);

    const output = [];

    function backtrack(index, current) {
        // Base case: we've built a complete combination
        if (index === digits.length) {
            output.push(current);
            return;
        }

        // Get letters for the current digit
        const letters = myMap.get(digits[index]);

        // Try each possible letter
        for (let letter of letters) {
            backtrack(index + 1, current + letter);
        }
    }

    backtrack(0, '');

    return output;
};