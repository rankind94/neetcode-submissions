class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    // return a boolean
    // dont need to worry about case

    checkInclusion(s1, s2) {
        // return false if s1 is longer than s2 (cant contain a perm of 1 if shorter)
        if (s1.length > s2.length) return false;
        // create character arrays for both s1 and s2
        const char1 = Array(26).fill(0);
        const char2 = Array(26).fill(0);

        for (let i = 0; i < s1.length; i++) {
            char1[s1[i].charCodeAt(0) - 97] += 1;
            char2[s2[i].charCodeAt(0) - 97] += 1;
        }

        // create pointers
        let [l, r] = [0, s1.length - 1];

        // while the right pointer is in bounds
        while (r < s2.length) {
            // check if the character arrays match
            let match = true;
            let i = 0;

            while(match && i < 26) {
                if (char1[i] != char2[i]) match = false;
                i++;
            }
            
            // if they match return true
            if (match) return true;
            // if they dont, remove the first character of string 2s char array and add a new one
            char2[s2[l].charCodeAt(0) - 97] -=1;
            l++;

            if (r == s2.length - 1) return false;
            r++;
            char2[s2[r].charCodeAt(0) - 97] += 1;
        }
            
        // return false
        return false;
    }
}
