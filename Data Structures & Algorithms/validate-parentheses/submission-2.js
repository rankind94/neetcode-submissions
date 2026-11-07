class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // output is bool
    isValid(s) {
        // create paren library (object with the key as the opening and val as the closing)
        const parenLib = { '[':']', '{':'}', '(':')'};
        // create a seenParen array
        const seenParen = [];
        // iterate over s using a for loop starting at i = 0 and ending at i = s.length -1
        for (let i = 0; i <= s.length - 1; i++) {
            // if s[i] is in paren library, push parenLib[s[i]] to the seenParen array
            if (parenLib[s[i]]) {
                seenParen.push(parenLib[s[i]]);
            // else (means its a closing bracket) check the popped value from seenParenArray
            } else {
                // if they dont match, return false
                if (s[i] != seenParen.pop()) return false;
            } 
        }
            
        // return true, meaning they were all valid
        return seenParen.length == 0;
    }
}
