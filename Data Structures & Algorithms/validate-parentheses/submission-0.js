class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // need to match open and closed brackets
    // closed in correct order
    // return boolean
    // need someway to track open and closed brackets, as well as there types
    // also need to track order
    // should be able to do this O(N)
    // order sounds like an array
    isValid(s) {
        // create bracket library
        const parenLib = {'{':'}', '(':')', '[':']'}
        // create array to store brackets in order
        const parenArray = []
        // iterate over string
        for (let i = 0; i < s.length; i++) {
            // if opening bracket
            // add corresponding closing bracket to an array
            if (parenLib[s[i]]) {
                parenArray.push(parenLib[s[i]])
            } else {
                console.log(s[i])
                console.log(parenArray[0])
                // if closing bracket
                // check to see if the last position in the closing bracket array matches
                // if it doesnt, return false
                const last = parenArray.pop()
                if (last != s[i]) return false;
            }
            
        }
            
        // return true if parenArray is empty (all openings found their match)
        return parenArray.length == 0;
    }
}
