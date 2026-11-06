class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // returning the length, not the substring itself
    // no repeating characters (set should be good for this)
    // should we consider spaces?
    // sliding window approach
        // grow while valid, setting new max length as appropriate
        // shrink until valid again
    // can a set contain spaces?
        // maybe turning it into unicode
    lengthOfLongestSubstring(s) {
        // if the length is 0 or 1, return the string itself
        if (s.length <= 1) return s.length;
        // create output var
        let output = 0;
        // create a new substring set
        const subSet = new Set();
        // dedicate your two pointers
        let [l, r] = [0, 1]
        // add the initial values
        subSet.add(s[l]);
        // while the right pointer is inbounds
        while (r < s.length) {
            // if substring is valid, check the max
            if (!subSet.has(s[r])) {
                subSet.add(s[r]);
                r++;
                output = Math.max(subSet.size, output);
            }
            // if invalid, shrink by incrementing left pointer and removing old value from set
            else {
                subSet.delete(s[l]);
                l++;
            }
        }

        // return output
        return output;
            
    }
}
