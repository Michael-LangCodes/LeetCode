// Given a string s, return the longest palindromic substring in s.


//Solution
var longestPalindrome = function(s) {
    let longest = "";

    function expand(left, right) {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        return s.slice(left + 1, right);
    }

    for (let i = 0; i < s.length; i++) {
        let odd = expand(i, i);
        let even = expand(i, i + 1);

        let longer = odd.length > even.length ? odd : even;

        if (longer.length > longest.length) {
            longest = longer;
        }
    }

    return longest;
};