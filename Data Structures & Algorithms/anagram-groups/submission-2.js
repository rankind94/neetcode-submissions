class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // anagram means same letters, no order
    // length is 0 to 10000
    // all lowercase
    // can be as long as 100 letters per
    groupAnagrams(strs) {
        // create anas object
        const anas = {};
        // loop over string
        strs.forEach((str) => {
            // count letters using 26 indexed array, stored by unicode
            const letters = Array(26).fill(0);

            for (let i = 0; i < str.length; i++) {
                letters[str[i].codePointAt(0) - 97] += 1;
            }
            // see if anas object has the key
            // if it doesnt exist, create the array
            if (!anas[letters]) anas[letters] = [];
            // push string into its respective array
            anas[letters].push(str);
        })
            
        // return the values of the anas object
        return Object.values(anas)
    }
}
