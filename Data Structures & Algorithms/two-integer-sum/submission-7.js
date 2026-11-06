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
        // create hashmap
        const hash = {};
        // iterate through nums
        for (let i = 0; i < nums.length; i++) {
            // figure out comp num
            const comp = target - nums[i];
            // check if comp num exists in hash, if so return indicies
            if (hash[comp] || hash[comp] == 0) return [hash[comp], i];
            // add cur to hash
            hash[nums[i]] = i;

        }
        // if it makes it through loop, we did not find a solution...what should we return?
    }
}
