// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree solution in JavaScript
// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

var getTargetCopy = function(original, cloned, target) {
    return inorder(original, cloned, target);
};

function inorder(o, c, target) {
    if (o == null) return o;

    if (o == target) return c;

    return (inorder(o.left, c.left, target) || inorder(o.right, c.right, target));
}