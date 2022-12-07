// 145. Binary Tree Postorder Traversal iterative solution in Java
// https://leetcode.com/problems/binary-tree-postorder-traversal/description/

/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public List<Integer> postorderTraversal(TreeNode root) {
        Stack<TreeNode> stack1 = new Stack<>();
		Stack<Integer> stack2 = new Stack<>();
		List<Integer> output = new ArrayList<>();

		if (root == null) return output;

		stack1.push(root);

		while (!stack1.isEmpty()) {
			TreeNode curr = stack1.pop();

			stack2.push(curr.val);

			if (curr.left != null) stack1.push(curr.left);
			if (curr.right != null) stack1.push(curr.right);
		}

		while (!stack2.isEmpty()) {
			output.add(stack2.pop());
		}

		return output;
    }
}