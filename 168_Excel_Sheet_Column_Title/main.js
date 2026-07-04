// Given an integer columnNumber, return its corresponding column title as it appears in an Excel sheet.

//Solution
var convertToTitle = function(columnNumber) {
    let result = "";

    while (columnNumber > 0) {
        columnNumber--;

        let remainder = columnNumber % 26;
        result = String.fromCharCode(remainder + 65) + result;

        columnNumber = Math.floor(columnNumber / 26);
    }

    return result;
};