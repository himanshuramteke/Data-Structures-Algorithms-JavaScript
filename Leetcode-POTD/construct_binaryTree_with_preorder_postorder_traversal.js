/**
 * Date: 23-02-2025
 * 889. Consruct a Binary Tree from Preorder and PostOrder Traversal(https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/description/?envType=daily-question&envId=2025-02-23)
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
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
} 
var constructFromPrePost = function(preorder, postorder) {
    let preIndex = 0;
    let postIndex = 0;

    const buildTree = () => {
        let root = new TreeNode(preorder[preIndex++]);

        if (root.val !== postorder[postIndex]) {
            root.left = buildTree();
        }
        if (root.val !== postorder[postIndex]) {
            root.right = buildTree();
        }
        
        postIndex++;
        return root;
    };

    return buildTree();
};