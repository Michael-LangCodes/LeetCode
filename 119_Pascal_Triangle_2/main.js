// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

//My Solution
var getRow = function(rowIndex) {
    let index = 0;
    let lastRow =[];
    let currentRow
    while (index <= rowIndex){
        currentRow = [];
        if (index === 0){
            currentRow = [1];
        }else if(index === 1){
            currentRow=[1,1];
        }else{
            currentRow.push(1);
            for(let x=1; x<index;x++){
                currentRow[x]=lastRow[x-1]+lastRow[x];
            }
            currentRow.push(1);
        }
        index++
        lastRow = currentRow;
    }
    return currentRow
};