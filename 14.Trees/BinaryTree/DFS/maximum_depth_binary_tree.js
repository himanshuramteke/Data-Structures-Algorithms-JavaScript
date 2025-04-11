/**
 * 104.Maximum Depth of Binart Tree(https://leetcode.com/problems/maximum-depth-of-binary-tree/)
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
    if(r == null) return 0;
    return Math.max(f(r.left), f(r.right)) + 1;
} 
var maxDepth = function(root) {
    return f(root);
};