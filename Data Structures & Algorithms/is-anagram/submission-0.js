class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    // is a string
    // is lowercase
    // order does not matter
    // could sort alphabetically if only letters
        // could be expensive timewise
    isAnagram(s, t) {
        // make sure lengths of s and t are the same before proceeding
        if (!(s.length == t.length)) return false;
        // create obejcts for both strings
        let sResult = {};
        let tResult = {};
        // loop through strings, counting each character
        for ( let i = 0; i < s.length; i++) {
            sResult[s[i]] = (sResult[s[i]] || 0) + 1;
            tResult[t[i]] = (tResult[t[i]] || 0) + 1;
        };
        // loop through result objects confirming that the occurences match
        for (let char in sResult) {
            // if they dont, return false
            if (sResult[char] !== tResult[char]) return false;
        };
        // return true if all conditions passed
        return true;
    }
  
}
