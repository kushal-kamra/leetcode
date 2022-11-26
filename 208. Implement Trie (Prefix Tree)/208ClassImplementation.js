// 208. Implement Trie (Prefix Tree) solution in JavaScript using class
// https://leetcode.com/problems/implement-trie-prefix-tree/description/

class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (node[char] == null) node[char] = {};

            node = node[char];
        }

        node.isEnd = true;
    }

    traverse(word) {
        let node = this.root;

        for (let char of word) {
            node = node[char];
            
            if (node == null) return null;
        }

        return node;
    }

    search(word) {
        const node = this.traverse(word);

        return node != null && node.isEnd == true;
    }

    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
}