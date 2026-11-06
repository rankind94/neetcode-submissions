class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // always need to sum to zero
    // will need to be nested loops
    threeSum(nums) {
        // check input
        if (!Array.isArray(nums)) return [];
        // create a result array
        const result = [];
        // start with one loop
        // sort nums
        nums.sort((a, b) => a - b);
        for (let i = 0; i < nums.length - 2; i++) {
            if (i > 0 && (nums[i] == nums[i - 1])) continue;

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const total = nums[i] + nums[left] + nums[right];

                if (total < 0) left ++;
                if (total > 0) right--;
                if (total == 0) {
                    result.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (nums[left] == nums[left -1] && left < right) {
                        left ++;
                    }
                }
            }
        }
        // return result array
        return result;
    }
}
