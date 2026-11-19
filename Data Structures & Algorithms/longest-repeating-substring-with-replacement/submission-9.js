class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    // given string s
    // can replace k amount of characters
    // return length of longest substring
    // all capitals

    characterReplacement(s, k) {
        // create output integer
        let max = 1;
        // create char array
        const chars = Array(26).fill(0);
        // create left and right pointer, both at 0
        let [l, r] = [0, 0];
        // while the right pointer in less than the length of string
        while (r <= s.length - 1) {
            // add the letter at the right pointer
            const codeAtR = s[r].charCodeAt(0) - 65;

            chars[codeAtR] += 1;

            // check if still valid
            let maxCount = Math.max(...chars);
            let maxIndex = chars.indexOf(maxCount);
            let replacements = 0;

            for (let i = 0; i <= chars.length -1; i++) {
                if (i != maxIndex) replacements += chars[i];
            }

            // if valid, check if length is greater than current output and set the max of the two
            if (replacements <= k) {
                max = Math.max(maxCount + replacements, max);
            } else {
                // if not valid, remove the letter at the left pointer and incremenrt
                const codeAtL = s[l].charCodeAt(0) - 65;
                chars[codeAtL] -= 1;

                l++;
            }
             
            // increment right pointer
            r++;
        }
            
        // return output
        return max;
    }
}
