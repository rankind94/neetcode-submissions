class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // binary search
    findMin(nums) {
        // set pointers, l = 0, r = nums.length - 1,
        let [l, r] = [0, nums.length -1];
        // create a while loop (l < r)
        while (r - l > 1) {
            // designate middle ( m = Math.floor((l + r)/ 2))
            const m = Math.floor((l + r) / 2);
            // if the nums[m] < nums[r]
            if (nums[m] < nums[r]) {
                // search lower half (r = m)
                r = m;
            } else {
                l = m;
            }    
        }

         
        // return the the middle (since its floored this should work)
        return Math.min(nums[l], nums[r]);
    }
}
