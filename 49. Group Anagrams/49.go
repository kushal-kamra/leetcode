// 49. Group Anagrams solution in GoLang
// https://leetcode.com/problems/group-anagrams/description/

func groupAnagrams(strs []string) [][]string {
    result_map := map[[26]int][]string{}

    for _, str := range strs {
        var key [26]int

        for _, char := range str {
            key[char - 'a']++
        }

        result_map[key] = append(result_map[key], str)
    }

    var result [][]string

    for _, result_map_row := range result_map {
        result = append(result, result_map_row)
    }

    return result
}