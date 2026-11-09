class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // return a boolean
    // remember to move and set vars early
    checkInclusion(s1, s2) {
        // return false if s1 is longer than s2
        if (s1.length > s2.length) return false;
        // create an s1 char array
        // create an s2 char array the same length as s1
        let s1CharArr = Array(26).fill(0);
        let s2CharArr = Array(26).fill(0);

        for (let i = 0; i <= s1.length -1; i++) {
            const s1Char = s1[i].charCodeAt(0) - 97;
            const s2Char = s2[i].charCodeAt(0) - 97;

            s1CharArr[s1Char] += 1;
            s2CharArr[s2Char] += 1;
        }

        // create two pointers, l = 0, r = s1.length - 1;
        let [l, r] = [0, s1.length - 1];

        // while r <= s2.length - 1
        while (r <= s2.length - 1) {
            // create a match var set to true
            let match = true;
            // check is the 2 char arrays match by looping through the char arrays at the same time
            for (let i = 0; i <= s1CharArr.length - 1; i++) {
                // comparing the counts at each letter
                // if the letters dont match at any point, set match to false and break the loop
                if (s1CharArr[i] != s2CharArr[i]) {
                    match = false;
                    break;
                }
            }
            
            // if match is true, return true
            if (match) { 
                return true;
            // else move
            } else {
                let lChar = s2[l].charCodeAt(0) - 97;
                // increment right pointer
                r++;
                // if the right pointer still exists, add it to the char 2 array
                if (r <= s2.length - 1) {
                    let rChar = s2[r].charCodeAt(0) - 97;
                    s2CharArr[rChar] += 1
                    };
                // delete the left letter
                s2CharArr[lChar] -= 1;
                // increment the left pointer
                l++;
            }     
        }
            
        // return false, because we've check all of s2 and it never returned true
        return false;

    }
}
