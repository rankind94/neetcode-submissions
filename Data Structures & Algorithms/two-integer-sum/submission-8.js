class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // turn nums into an object with the index as the key, and the value as the value
        const numHash = { };

        // loop through nums
        for (let i = 0; i < nums.length; i++) {
            const val = nums[i];
            const comp = target - val;

            if (numHash[comp] || numHash[comp] == 0) return [numHash[comp], i];
            numHash[val] = i;
        }  
    }
}
