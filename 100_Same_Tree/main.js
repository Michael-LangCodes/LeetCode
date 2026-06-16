// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

//Solution
var isSameTree = function(p, q) {
    // Both nodes are null
    if (p === null && q === null) {
        return true;
    }
    // One is null, the other isn't
    if (p === null || q === null) {
        return false;
    }
    // Values differ
    if (p.val !== q.val) {
        return false;
    }
    // Compare left and right subtrees
    return isSameTree(p.left, q.left) &&
           isSameTree(p.right, q.right);
};