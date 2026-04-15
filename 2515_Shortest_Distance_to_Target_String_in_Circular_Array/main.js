// You are given a 0-indexed circular string array words and a string target. A circular array means that the array's end connects to the array's beginning.

// Formally, the next element of words[i] is words[(i + 1) % n] and the previous element of words[i] is words[(i - 1 + n) % n], where n is the length of words.
// Starting from startIndex, you can move to either the next word or the previous word with 1 step at a time.

// Return the shortest distance needed to reach the string target. If the string target does not exist in words, return -1.

//My Solution
/**
 * @param {string[]} words
 * @param {string} target
 * @param {number} startIndex
 * @return {number}
 */
var closestTarget = function(words, target, startIndex) {
    const indices = [];
    words.forEach((el, i) => el === target && indices.push(i));
    if(indices.length===0){
        return -1
    }
    let output = []
    indices.forEach((e,x)=>{
        console.log(e)
        let direct = Math.abs(startIndex - e);
        let wrapAround = words.length - direct;
        let minDistance = Math.min(direct, wrapAround);
        output.push(minDistance)
    })
    return Math.min(...output)
};