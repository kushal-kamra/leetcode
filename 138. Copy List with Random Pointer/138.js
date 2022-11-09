//138. Copy List with Random Pointer solution in Javascript
//https://leetcode.com/problems/copy-list-with-random-pointer/description/

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

 function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
 };

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    if (!head) return head;

    const clones = new Map();

    let ptr = head;

    while(ptr) {
        clones.set(ptr, new Node(ptr.val));
        ptr = ptr.next;
    }

    ptr = head;

    while(ptr) {
        clones.get(ptr).next = clones.get(ptr.next) || null;
        clones.get(ptr).random = clones.get(ptr.random) || null;
        ptr = ptr.next;
    }

    return clones.get(head);
};

function main() {
    let head = new Node(7);

    let ptr = head;
    ptr.next = new Node(13);
    ptr = ptr.next;
    ptr.random = head;
    ptr.next = new Node(11);
    ptr = ptr.next;
    let ptr_index_2 = ptr;
    ptr.next = new Node(10);
    ptr = ptr.next;
    ptr.random = ptr_index_2;
    ptr.next = new Node(1);
    ptr = ptr.next;
    ptr.random = head;
    ptr_index_2.random = ptr;

    console.log(copyRandomList(head) == head);
}

main();