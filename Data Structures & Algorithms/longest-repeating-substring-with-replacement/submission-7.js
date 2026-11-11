class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // remeber 0 equalivates to false
    // uppercase cahracters
    // can perform k replacements
    // can be long, so definitely under O(n^2)
    // k is guaranteed to be only as long as k
    characterReplacement(s, k) {
        // start with 2 pointers, with l = 0, r = 1
        let [l, r] = [0, 1];
        // create a max len var = 1 (always guaranteed to be 1 if it contains a single car)
        let maxLen = 1;
        // create a cur len var
        let curLen = 1;
        // create a char array with first letter, and increment the value at the index corresponding to the first char + curLen
        const charArray = Array(26).fill(0);
        charArray[s[0].charCodeAt(0) - 65] += 1;

        // while the right pointer <= s.length - 1
        while (r <= s.length - 1) {
            // set char at r variable, and temp k
            const charR = s[r].charCodeAt(0) - 65;
            const charL = s[l].charCodeAt(0) - 65;
            let tempK = k;
            // add the letter at the right pointer
            charArray[charR] += 1;
            curLen++;
            // find the index of the max count
            let maxCount = 0;
            // check if the substring meets the required conditions
            charArray.forEach((count, i) => {
                if (count > maxCount) {
                    maxCount = count;
                }
            });
            const match = curLen - maxCount <= k;
            // if it meets the condition, add to the cur len, and set new max with cur len and max len
            // if it doesnt, remove the left letter, and increment the left pointer
            if (match) {
                maxLen = Math.max(curLen, maxLen);
            } else {
                charArray[charL] -= 1;
                curLen--;
                l++;
            }
            // increment the right pointer
            r++;
        }
         
        // return max len
        return maxLen;
    }
}
