//Given the root of a binary tree, check whether it is a mirror of itself (i.e., symmetric around its center).

//Solution
var isSymmetric = function(root) {
    function isMirror(left,right){
        if(!left && !right) return true;
        if(!left || !right) return false;

        return(
            left.val === right.val && 
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        )
    }
    return isMirror(root.left, root.right);
};