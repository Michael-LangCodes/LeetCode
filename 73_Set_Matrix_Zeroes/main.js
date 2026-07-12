// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

//My Solution
var setZeroes = function(matrix) {
    let zeros=[];
    for(let i=0;i<matrix.length;i++){
        let c = matrix[i].indexOf(0);
        while (c !== -1) {
            zeros.push([i, c]);
            c = matrix[i].indexOf(0, c + 1);
        }
    }
    for (const [r, c] of zeros) {
        matrix[r].fill(0)
        for(let x=0;x<matrix.length;x++){
            matrix[x][c]=0
        }
    }   
};