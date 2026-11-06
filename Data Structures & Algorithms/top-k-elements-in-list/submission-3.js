class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // can be long, o(N) is the goal
    // return output array
    // answer is always unique
    topKFrequent(nums, k) {
        // create count object
        const count = {}
        // create output object
        const output = [];
        // fill count
        nums.forEach((num) => {
            count[num] = (count[num] || 0) + 1;
        })
        // grab top k arrays from the object entries sorted by values
        const topNums = Object.entries(count).sort((a, b) => b[1] - a[1]).slice(0, k)

        // fill output
        topNums.forEach((entry) => output.push(entry[0]));

        // return output
        return output;
    }
}
