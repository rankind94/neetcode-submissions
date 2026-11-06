class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // only one solution, can return when its found
    // smaller index first
    // not sorted
    // thinking of using hashmap
    // return array with two nums
    twoSum(nums, target) {
        const hash = {};
        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const comp = target - nums[i];
            if (hash[comp] || hash[comp] == 0) return [hash[comp], i];
            hash[val] = i;

        }
    }
}
