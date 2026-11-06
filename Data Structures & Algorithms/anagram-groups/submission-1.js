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
        const res = {};

        for (let i = 0; i < strs.length; i++) {
            const curArray = strs[i].split('').sort();

            if (!res[curArray]) { res[curArray] = [] };
            res[curArray].push(strs[i]);
        };

        return Object.values(res);
    }
}