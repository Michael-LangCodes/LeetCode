// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.

//My Solution
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let output;
    let operand = [];
    for(let i=0;i<tokens.length;i++){
        let token = tokens[i];
        if(tokens.length===1){
            return Number(token)
        }
        else if (token === "+" || token === "-" || token === "*" || token === "/"){
                if(token === "+"){
                    output = operand[operand.length-2]+operand[operand.length-1]
                }else if(token === "-"){
                    output = operand[operand.length-2]-operand[operand.length-1]
                }else if(token === "*"){
                    output = operand[operand.length-2]*operand[operand.length-1]
                }else if(token === "/"){
                    output =operand[operand.length-2]/operand[operand.length-1]
                    output = Math.trunc(output)
                }
                operand.pop();
                operand.pop();
                operand.push(output)
            }
        else{
            operand.push(Number(token))
        }
    }
    return output
};