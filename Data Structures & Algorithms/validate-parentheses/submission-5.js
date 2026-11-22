class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // string consists of brackets
    // every open closed by the same type
    // close in correct order
    // every close bracket has a coresponding opening
    // length is 1 to 1000
    // time O(N), space is O(1)
    // guarantee string is a bracket?
    isValid(s) {
        // create bracket library
        const bracketLib = { '(':')', "{":"}", "[":"]"};
        // create seen bracket
        const compBracket = [];
        // run for loop over string, starting at index 0, ending at index s.length - 1 (inclusive)
        for (let i = 0; i <= s.length - 1; i++) {
            // if opening, bracket[open] to seen
            if (bracketLib[s[i]]) {
                compBracket.push(bracketLib[s[i]]);
            } else {
                // else pop off end of seen bracket array, if they dont match return false
                if (compBracket.pop() != s[i]) return false;
            }
        }
            
        // return true
        return compBracket.length == 0;
    }
}
