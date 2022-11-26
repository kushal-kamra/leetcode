// 208. Implement Trie (Prefix Tree) solution in JavaScript
// https://leetcode.com/problems/implement-trie-prefix-tree/description/

var Trie = function() {
    this.root = {};
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let node = this.root;

    word.split('').forEach((char) => {
        if (!node[char]) node[char] = {};

        node = node[char];
    })

    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let node = this.searchNode(word);

    return node != null ? node.isEnd == true : false;
};

Trie.prototype.searchNode = function(word) {
    let node = this.root;

    for (let char of word.split('')) {
        if (node[char]) {
            node = node[char]
        } else {
            return null;
        }
    }

    return node;
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let node = this.searchNode(prefix);

    return node != null;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */