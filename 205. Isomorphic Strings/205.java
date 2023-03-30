// 205. Isomorphic Strings solution in Java
// https://leetcode.com/problems/isomorphic-strings/description/

class Solution {
    public boolean isIsomorphic(String s, String t) {
        
        int len = s.length();
        HashMap<Character, Character> map_st = new HashMap<>();
        HashMap<Character, Character> map_ts = new HashMap<>();
        
        for (int i = 0; i < len; i++) {
            Character cs = s.charAt(i);
            Character ct = t.charAt(i);
            
            if (map_st.get(cs) != null || map_ts.get(ct) != null) {
                if (map_st.get(cs) != ct) return false;
                if (map_ts.get(ct) != cs) return false;
            } else {
                map_st.put(cs, ct);
                map_ts.put(ct, cs);
            }
        }
        return true;
    }
}