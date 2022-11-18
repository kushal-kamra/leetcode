//138. Copy List with Random Pointer solution in Java
//https://leetcode.com/problems/copy-list-with-random-pointer/description/

/*
// Definition for a Node.
class Node {
    int val;
    Node next;
    Node random;

    public Node(int val) {
        this.val = val;
        this.next = null;
        this.random = null;
    }
}
*/

class Solution {
    public Node copyRandomList(Node head) {
        if (head == null) {
            return head;
        }

        Node ptr = head;
        HashMap<Node, Node> visited = new HashMap<Node, Node>();

        while (ptr != null) {
            visited.put(ptr, new Node(ptr.val, null, null));
            ptr = ptr.next;
        }

        ptr = head;

        while (ptr != null) {
            visited.get(ptr).next = visited.get(ptr.next);
            visited.get(ptr).random = visited.get(ptr.random);
            ptr = ptr.next;
        }

        return visited.get(head);
    }
}