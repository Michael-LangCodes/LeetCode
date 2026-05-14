// Given an integer x, return true if x is a palindrome, and false otherwise.

//My Solution
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let rev
    if (x>=0){
        rev = Number(x.toString().split('').reverse().join(''))
    }else{
        return false
    }
    return rev === x
};