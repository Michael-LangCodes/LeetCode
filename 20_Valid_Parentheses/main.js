// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

//My Solution
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let checkList=new Array();
    let output = true;
    for(let i=0;i<s.length;i++){
        console.log(checkList)
        if(s[i]==='(' ||s[i]==='{' ||s[i]==='['){
            checkList.push(s[i]);
        }else if(checkList.length==0){
            console.log('Empty List')
            output = false
        }else{
            let last = checkList[checkList.length-1];
            if(s[i]===')' ){
                if(last==='('){
                    checkList.pop()
                }else{
                    output = false
                }
            }else if(s[i]==='}' ){
                if(last==='{'){
                    checkList.pop()
                }else{
                    output = false
                }
            }else if(s[i]===']' ){
                if(last==='['){
                    checkList.pop()
                }else{
                    output = false
                }
            }else{
                console.log('How am I here?')
            }
        }
    }
    if(checkList.length!==0){
        output=false
    }
    return output
};