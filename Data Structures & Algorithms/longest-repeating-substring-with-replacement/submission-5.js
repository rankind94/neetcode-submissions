class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // sliding window
    // only uppercase letters
    // can replace up to k letters
    characterReplacement(s, k) {
        // create a let variable that will hold the length of the longest substring
        let maxLen = 0;
        // create two pointers (l = 0, r = 0) to iterate over the string
        let [l, r] = [0, 0]
        // create a character array with the first character of the string
        const chars = Array(26).fill(0);
        chars[s[0].charCodeAt(0) - 65] = 1;

        // start a while loop r is inbounds (r <= s.length - 1)
        while (r <= s.length - 1){
            // set a nonLetterCount variable to track how many "wildcards" we have left
            const kLeft = k - ((r - l + 1) - Math.max(...chars));

            // if nonLeterCount >= 0 (conditions are met), check against the overall max
            if (kLeft >= 0) {
                maxLen = Math.max(maxLen, r - l + 1);
            } else {
                // if not, remove the old letter and increment the left pointer
                chars[s[l].charCodeAt(0) - 65] -= 1;
                l++;
            }
            
            // if r <= s.length - 1, add the letter at index r to the char array
            r++;
            if (r < s.length) {
                chars[s[r].charCodeAt(0) - 65] += 1;
            }
        }
            
        // return the longest substring var
        return maxLen;
    }
}
