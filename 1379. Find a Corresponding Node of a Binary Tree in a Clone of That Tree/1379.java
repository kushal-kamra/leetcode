// 1379. Find a Corresponding Node of a Binary Tree in a Clone of That Tree solution in Java
// https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/description/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */

class Solution {

    TreeNode result, target;

    public final TreeNode getTargetCopy(final TreeNode original, final TreeNode cloned, final TreeNode target) {
        this.target = target;

        inorder(original, cloned);

        return result;
    }

    private void inorder(TreeNode o, TreeNode c) {
        if (o != null) {
            inorder(o.left, c.left);

            if (o == target) {
                result = c;
            }

            inorder(o.right, c.right);
        }
    }
}