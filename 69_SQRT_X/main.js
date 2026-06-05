// Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

// You must not use any built-in exponent function or operator.

//My Solution
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let last = 0;
    let current;
    let output;
    for(let i=0;i<=x;i++){
        if(i*i>x){
            output = i-1;
            break;
        }else if(i*i===x || x===0){
            output = i;
            break;
        }
    }
    return output;
};