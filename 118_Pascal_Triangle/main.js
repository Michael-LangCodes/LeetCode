// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//My Solution
var generate = function(numRows) {
    let output =[]
    for(let i=1;i<=numRows;i++){
        let incremental = [];
        for(let x=0;x<i;x++){
            if(x===0 || x===i-1){
                incremental.push(1)
            }else{
                let last = output[output.length-1];
                incremental.push(last[x-1]+last[x])
            }
        }
        output.push(incremental)
    }
    return output
};