class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // boolean output
    // alphanumerica charecters matter
    isPalindrome(s) {
        // change string to array of chars that matter
        const sArray = [...s.toLowerCase().replace(/[^a-z0-9]/g, "")];   
        // set two pointers
        let l = 0;
        let r = sArray.length -1;
        // loop through char aray
        while (l < r) {
            // check if they match, if they dont return false
            if (sArray[l] != sArray[r]) return false
            // set new pointers
            l++;
            r--;
        }
            
        // return true if make it through loop
        return true;
    }
}
