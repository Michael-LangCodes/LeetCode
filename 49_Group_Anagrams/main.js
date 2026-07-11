// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

//Solution
var groupAnagrams = function(strs) {
    //Create Map
    let anaMap = new Map();
    //Loop 
    for(let i=0;i<strs.length;i++){
        let strSorted=strs[i].split('').sort().join('');
        if(anaMap.get(strSorted)){
            anaMap.get(strSorted).push(strs[i])
        }else{
            anaMap.set(strSorted,[strs[i]])
        }
    }
    //Loop to Create Ouput
    let output=[];
    for (const [key,value] of anaMap){
        output.push(value)
    }
    return output
};