/**
 * 102.Binary Tree Level Order Traversal(https://leetcode.com/problems/binary-tree-level-order-traversal/)
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root == null) return [];

    const queue = [];
    const result = [];
    let temp = [];

    queue.push(root);
    queue.push(null);

    while (queue.length > 0) {
        const front = queue.shift();

        if (front === null) {
            result.push(temp);
            temp = [];
            if (queue.length > 0) {
                queue.push(null); // Add marker for next level
            }
        } else {
            temp.push(front.val);

            if (front.left) queue.push(front.left);
            if (front.right) queue.push(front.right);
        }
    }

    return result;
};