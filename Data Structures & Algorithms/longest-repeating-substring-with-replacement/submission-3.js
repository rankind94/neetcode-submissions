class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // k is the number of letters we can replace
    // all upercase
    // so amount of letters we need is length of substring less 2
    // output is the length
    // only uppercase letters, so dont need to worry about nums, spaces, things like that
    // cant use set because we need to know the tally
    // need to figure out if we move right pointer every time or just when growing
    // trying to think if using the first letter as the target letter is the right approach
    // during shrinking phase, what if the condition is now met by a letter that isnt our target letter?
    // we may need to keep track using a tally object
    // biggest issue is figuring out how to track effeciently through each iteration
    // check should be if any values of the object have cur string length - k
    // sliding window approach
    characterReplacement(s, k) {
        // turn s into an array
        const sArray = s.split("")
        let curSub = {};
        // set max len var
        let maxLen = 0;
        // set pointers
        let l = 0;
        let r = 0;
        // iterate over the s array while the right pointer is inbounds
        while (r < sArray.length) {
            // if conditions are met keep growing substring (move pointer to the right), also check length here
            // if curLetter is not equal to the tar letter
            // add to nonLet counter

            // add curletter to cursub object
            if (!curSub[sArray[r]] && curSub[sArray[r]] !== 0) curSub[sArray[r]] = 0;
            curSub[sArray[r]] += 1;

            let valid = false;
            let curSubLen = r - l + 1;

            // check if sub is valid
            Object.values(curSub).forEach((val) => {
                if (val >= curSubLen - k) valid = true
            });

            // if valid, continue growing and check max
            // if not, start shriking until valid
            if (valid) {
                // need to change this if using an object
                maxLen = Math.max(maxLen, curSubLen);
            } else {
                curSub[sArray[l]] = curSub[sArray[l]] - 1;
                l++;
            }
            r++;
        }
        // return the max length
        return maxLen;
    }
}
