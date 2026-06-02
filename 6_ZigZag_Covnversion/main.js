// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R
// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a number of rows:

// string convert(string s, int numRows);

//Solution
var convert = function(s, numRows) {
    if (numRows === 1) return s;

    const rows = Array(numRows).fill("");

    let currentRow = 0;
    let goingDown = true;

    for (const char of s) {
        rows[currentRow] += char;
        
        //Direction
        if(currentRow===numRows-1){
            goingDown=false;
        }else if(currentRow ===0){
            goingDown = true;
        }
        
        //Update Direction
        if(goingDown){
            currentRow++
        }else{
            currentRow--
        }
    }
    return rows.join("");
};