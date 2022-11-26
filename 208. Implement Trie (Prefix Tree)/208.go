// 208. Implement Trie (Prefix Tree) solution in GoLang
// https://leetcode.com/problems/implement-trie-prefix-tree/description/

package leetcode

type Trie struct {
    children [26]*Trie
    isEnd bool
}


func Constructor() Trie {
    return Trie{}
}


func (this *Trie) Insert(word string)  {
    currNode := this

    for _, char := range word {
        idx := char - 'a'

        if currNode.children[idx] == nil {
            currNode.children[idx] = &Trie{}
        }

        currNode = currNode.children[idx]
    }

    currNode.isEnd = true
}


func (this *Trie) Search(word string) bool {
    currNode := this

    for _, char := range word {
        idx := char - 'a'

        if currNode.children[idx] == nil {
            return false
        }

        currNode = currNode.children[idx]
    }
    return currNode.isEnd
}


func (this *Trie) StartsWith(prefix string) bool {
    currNode := this

    for _, char := range prefix {
        idx := char - 'a'

        if currNode.children[idx] == nil {
            return false
        }

        currNode = currNode.children[idx]
    }
    return true
}


/**
 * Your Trie object will be instantiated and called as such:
 * obj := Constructor();
 * obj.Insert(word);
 * param_2 := obj.Search(word);
 * param_3 := obj.StartsWith(prefix);
 */