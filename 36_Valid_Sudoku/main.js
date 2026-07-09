// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.

//My Solution
var isValidSudoku = function(board) {
    for(let i=0;i<board.length;i++){
        let rowMap = new Map();
        let row = board[i];
        for(let x=0;x<row.length;x++){
            if(row[x]==='.'){
                continue;
            }else if(rowMap.has(row[x])){
                return false;
            }else{
                rowMap.set(row[x], 1);
            }
        }
        let columnMap = new Map();
        for (let d = 0; d < row.length; d++) {
            if (board[d][i] === '.') {
                continue;
            } else if (columnMap.has(board[d][i])) {
                return false;
            } else {
                columnMap.set(board[d][i], 1);
            }
        }
    }
    for (let row=0;row<9;row+=3){
        for(let col=0;col<9;col+=3){
            let boxMap = new Map();
            for(let i=row;i<row+3;i++){
                for(let x=col;x<col+3;x++){
                    if(board[i][x]==='.'){
                        continue
                    }else if(boxMap.has(board[i][x])){
                        return false
                    }else{
                        boxMap.set(board[i][x],1);
                    }
                }
            }
        }
    }
    return true;
};