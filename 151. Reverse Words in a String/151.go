// 151. Reverse Words in a String solution in GoLang
// https://leetcode.com/problems/reverse-words-in-a-string/description/

package leetcode

func reverseWords(s string) string {
    var result string
    var word string

    for i := 0; i < len(s); i++ {
        if s[i] == ' ' {
            if len(word) > 0 && len(result) > 0 {
                result = word + " " + result;
            } else if len(word) > 0 {
                result = word;
            }
            word = ""
        } else {
            word = word + string(s[i])
        }
    }
    
    if len(word) > 0 && len(result) > 0 {
                result = word + " " + result;
            } else if len(word) > 0 {
                result = word;
            }

    return result
}