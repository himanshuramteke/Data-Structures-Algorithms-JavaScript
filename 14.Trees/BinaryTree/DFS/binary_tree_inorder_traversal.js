/**
 * 94.Binary Tree Inorder Traversal(https://leetcode.com/problems/binary-tree-inorder-traversal/)
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
let result;
function In(r) {
    if(r == null) return;
    In(r.left);
    result.push(r.val);
    In(r.right);
} 
var inorderTraversal = function(root) {
    result = [];
    In(root);
    return result;
};