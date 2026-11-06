class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    // can be empty string
    // sliding window
    // does case matter?
    lengthOfLongestSubstring(s) {
       // turn into array, use ,split method
       let sArray = s.split("")
       console.log('sArray', sArray)
       let maxLen = 0;
       // set longest sub int variable
       // set l and r indicies
       let l = 0;
       let r = 0;
       let charSet = new Set([]);
    //    while r is still in bounds
       while (r < sArray.length) {
        while (charSet.has(sArray[r])) {
            charSet.delete(sArray[l]);
            l++
        }

        charSet.add(sArray[r]);
        maxLen = Math.max(maxLen, charSet.size);
        r++;
       }

       maxLen = Math.max(maxLen, charSet.size);

       return maxLen;
        
    }
}
