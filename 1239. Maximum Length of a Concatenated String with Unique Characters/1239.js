// 1239. Maximum Length of a Concatenated String with Unique Characters solution in JavaScript
// https://leetcode.com/problems/maximum-length-of-a-concatenated-string-with-unique-characters/description/

/**
 * @param {string[]} arr
 * @return {number}
 */
var maxLength = function(arr) {
    return dfs(arr, 0, "");
};

let dfs = function(arr, pos, res) {
    let res_set = new Set(res.split(""));

    if (res.length != res_set.size) return 0;

    let best = res.length;

    for (let i = pos; i < arr.length; i++) {
        best = Math.max(best, dfs(arr, i + 1, res + arr[i]));
    }

    return best;
}