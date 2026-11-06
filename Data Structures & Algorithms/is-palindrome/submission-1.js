class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    // only characters
    // case insensitive

    // how do we check for letters only? regex?
    // how do we get rid of spaces?
    isPalindrome(s) {
        // split string into array that has letters
        const strArray = s.split("");
        
        const charArray = strArray.filter((val) => {
            return /^[a-zA-Z0-9]$/.test(val);
        });

        charArray.forEach((ltr, ind) => charArray[ind] = ltr.toUpperCase())

        console.log(charArray)
        let left = 0;
        let right = charArray.length - 1;
        // while left is less than right
        while (left < right) {
             // check if letters match
             if (charArray[left] == charArray[right]) {
                left++;
                right--;
                continue;
             }
            return false;
        }
           
        return true;
    }
}
