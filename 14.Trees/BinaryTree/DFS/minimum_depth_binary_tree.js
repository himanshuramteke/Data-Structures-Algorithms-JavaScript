/**
 * 111.Minimum Depth of Binary Tree(https://leetcode.com/problems/minimum-depth-of-binary-tree/)
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
 * @return {number}
 */
function f(r) {
    if (r == null) return 0;
    if (r.left == null) return 1 + f(r.right);
    if (r.right == null) return 1 + f(r.left);
    return 1 + Math.min(f(r.left), f(r.right)); 
} 
var minDepth = function(root) {
    return f(root);
};