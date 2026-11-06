class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // consider if its actually array of numbers
        if (!Array.isArray(nums)) return false;
        nums.sort(function(a,b) {
            return a-b;
        });
        // iterate through input array
        for (let i = 1; i < nums.length; i++) {
            if (i == 0) continue;
            if (nums[i] == nums[i - 1]) return true;
        }
        //return false
        return false;
    }
}
