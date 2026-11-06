class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // if the length is 1, check if it matches
        // if it does, return the indicie, otherwise return -1
        // set left and right pointer indicies
        let l = 0;
        let r = nums.length -1;
        // while left pointer is less than right pointer
        while (r >= l) {
            // set constant for middle indicie
            const midIndex = Math.floor((l + r) / 2);
            // if middle indicie is greater than target, move indicies to start and end of the lower half of array
            // if left indicie is less than target, move indicies to start and end of the upper half of array
            (nums[midIndex] < target) ? l = midIndex + 1 : r = midIndex - 1;
            
            if (nums[midIndex] == target) return midIndex;
        }

        // if not found, return -1
        return -1;    
    }
}
