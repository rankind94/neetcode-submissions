class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        // turn string into array (easier to iterate over)
        const charArray = Array.from(s.replace(/[^a-zA-Z0-9]/g, "").toUpperCase());
        console.log('charArray', charArray)
        // set two pointers
        let l = 0;
        let r = charArray.length - 1;
        // while loop while left < right
        while (l < r) {
            // if left is not equal to right, return false
            if (charArray[l] != charArray[r]) return false;
            l++;
            r--;
            // increment left pointer, decrement right pointer
        }
            
        // if it makes it through the loop, return true
        return true;
    }
}
