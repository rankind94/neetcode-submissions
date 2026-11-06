class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    // order does not matter
    // will be an array of arrays
    // will need counter objects
    // all lowercase
    // can just have one string and no subarry
    groupAnagrams(strs) {
        const anagrams = {};

        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            (!anagrams[sortedS]) ? anagrams[sortedS] = [s] : anagrams[sortedS].push(s);
        }
        return Object.values(anagrams);
        const res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
    }
}
