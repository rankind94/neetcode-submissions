class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // array of num arrays
    // indicies are distinct but can be reused
    // any order
    threeSum(nums) {
        // check if inputs are valid
        // sort the nums array
        nums.sort((a, b) => a - b);
        
        // create an array called output to store our output
        const output = [];
        // iterate over nums with a for loop until i = nums.length
        for (let i = 0; i <= nums.length - 1; i++) {
            // if i != 0 and nums[i] == nums[i - 1] skip the iteration
            if (i != 0 && nums[i] == nums[i - 1]) continue;
            // find the target by setting the comp as nums[i] * -1
            const tar = nums[i] * -1;
            // create two pointers l = i + 1, r = nums.length - 1
            let [l, r] = [i + 1 , nums.length - 1];
            // iterate over the rest of nums using while (l < r)
            while (l < r) {
                // if i != l and nums[l] == nums[l - 1] skip the iteration
                if (l != i + 1 && nums[l] == nums[l - 1]) {
                    l++;
                    continue;
                }
                // find the total of nums[l] and nums[r]
                const tot = nums[l] + nums[r];

                // // if its less than the target
                if (tot < tar) {
                    // increment the l pointer
                    l++;
                // else if its greater than the target
                } else if (tot > tar) {
                    // decrement the r pointer
                    r--;
                // else (equals)
                } else {
                    // push an array of the values at indicies i, l, r
                    output.push([nums[i], nums[l], nums[r]]);
                    // increment l and decrement r
                    l++;
                    r--;
                }     
            }     
        }
            
        // return the output
        return output;
    }
}
