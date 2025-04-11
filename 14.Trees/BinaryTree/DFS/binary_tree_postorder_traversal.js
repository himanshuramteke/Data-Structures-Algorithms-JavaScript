/**
 * 145. Binary Tree Postorder Traversal(https://leetcode.com/problems/binary-tree-postorder-traversal/)
 * 
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
function Post(r) {
    if(r == null) return;
    Post(r.left);
    Post(r.right);
    result.push(r.val);
} 
var postorderTraversal = function(root) {
    result = [];
    Post(root);
    return result;
};