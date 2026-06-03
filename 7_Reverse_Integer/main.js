// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

//My Solution
var reverse = function(x) {
    let list = x.toString().split('')
    let output
    if(Number.isNaN(Number(list[0]))){
        let sign = '-'
        let updated  = list.slice(1).reverse().join('');
        updated = sign + updated;
        output = Number(updated);
    }else{
        output = Number(list.reverse().join(''));
    }
    if(output>2147483647 || output <-2147483648){
        output = 0
    }
    return output
};