/**
 * Date: 22-02-2025
 * 1028. Recover a Tree from preorder traversal(https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/description/?envType=daily-question&envId=2025-02-22)
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
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function(traversal) {
    let index = 0;
     const getDepth = () => {
        let depth = 0;
        while (index < traversal.length && traversal[index] === '-') {
            depth++;
            index++;
        }
        return depth;
    };

    // Helper function to get the value of the current node
    const getValue = () => {
        let value = '';
        while (index < traversal.length && traversal[index] !== '-') {
            value += traversal[index];
            index++;
        }
        return parseInt(value, 10); // Convert the string to a number
    };
    const buildTree = (depth) => {
        if (index >= traversal.length) return null; // Base case: end of string

        const nodeDepth = getDepth(); // Get the depth of the current node
        if (nodeDepth !== depth) {
            // If the depth doesn't match, backtrack and return null
            index -= nodeDepth; // Move the pointer back
            return null;
        }

        const value = getValue(); // Get the value of the current node
        const node = new TreeNode(value); // Create a new node

        // Recursively build the left and right subtrees
        node.left = buildTree(depth + 1);
        node.right = buildTree(depth + 1);

        return node;
    };

    return buildTree(0)
};