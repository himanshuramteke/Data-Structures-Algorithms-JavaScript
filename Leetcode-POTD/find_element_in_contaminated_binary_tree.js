/**
 * Date: 21-02-2025
 * 1261.Find elements in a contaminated binary tree(https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/description/?envType=daily-question&envId=2025-02-21)
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
 */
var FindElements = function(root) {
    this.values = new Set();
    this.recover(root, 0);
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.recover = function(node, val) {
    if (!node) return;
    node.val = val;
    this.values.add(val);
    this.recover(node.left, 2 * val + 1);
    this.recover(node.right, 2 * val + 2);
};

FindElements.prototype.find = function(target) {
     return this.values.has(target);
};

/** 
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */