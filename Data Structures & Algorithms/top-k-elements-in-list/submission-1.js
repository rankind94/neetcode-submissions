class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // answer is always unique
    // any order return
    // array input nums always in sorder
    topKFrequent(nums, k) {
        // sort nums array
        // nums.sort();
        // declare result array
        const res = [];
        // declare counter object
        const counter = {};
        // loop through array
        nums.forEach((num) => {
            // if havent seen number yet, add it to the counter object
            if (!counter[num]) counter[num] = 0;
            // if it already exists, increment object value
            counter[num] += 1;
        });
            
        const sortedObjEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]);

        while (k > 0) {
            res.push(sortedObjEntries[k - 1][0]);
            k--;
        }
            
        // return result array
        return res;
    }
}
