// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//My Solution
var maxProfit = function(prices) {
    let min = Infinity;
    let max = -Infinity;
    let current;
    let output = 0;
    let check;
    for(let i=0;i<prices.length;i++){
        current = prices[i];
        if(i===0){
            max = current;
            min = current;
        }else if(current>max){
            max = current
        }else if(current<min){
            min = current;
            max = current;
        }
        check = max-min;
        if(check>output){
            output=check
        }
    }
    if(min === Infinity || max===-Infinity){
        output = 0;
    }
    return output
};