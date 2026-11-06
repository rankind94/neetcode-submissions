class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    // only one pair, so can return when found
    // not sorted
    // can we assume that one answer always exists?
    twoSum(nums, target) {
        // utilize 2 pointer stategy
        // declare left and right variables
        let numsObj = {};
        let result;
        // use while loop
        nums.forEach((num, i) => {
            let desiredValue = target - num;
            if (numsObj[desiredValue] !== undefined) {
                result = [numsObj[desiredValue], i]
            }
            numsObj[num] = i;
        });
        return result;
    }
}
