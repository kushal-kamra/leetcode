// 49. Group Anagrams solution in Java
// https://leetcode.com/problems/group-anagrams/description/

class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        Map<String, List> result_map = new HashMap<String, List>();

        for (String str : strs) {
            int[] key_count = new int[26];

            Arrays.fill(key_count, 0);

            for (char c : str.toCharArray()) {
                key_count[c - 'a']++;
            }

            StringBuilder key_sb = new StringBuilder("");

            for (int key : key_count) {
                key_sb.append(key);
                key_sb.append("#");
            }

            String key = key_sb.toString();

            if (!result_map.containsKey(key)) {
                result_map.put(key, new ArrayList());
            }

            result_map.get(key).add(str);
        }

        return new ArrayList(result_map.values());
    }
}