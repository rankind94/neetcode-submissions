class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    // products before, products after
    // test with small inputs, 1-3 elements
    // nums can be long so o(n) is desired
    productExceptSelf(nums) {
        // create an array to hold products before and products after
        const before = [];
        const after = [];
        // fill the products before and products after arrays
        // run a for loop starting at 2nd index, incrementing, first index will always have 1 as its product before
        for (let i = 0; i <= nums.length - 1; i++) {
            if (i == 0) {
                before[0] = 1
            } else {
                // add the product of nums[ i - 1] and before [i - 1] as current values product before
                before[i] = before[i - 1] * nums[i - 1];
            };
            
        }

        // run a for loop starting at the 2nd to last index, decrementing, last index will always have one as its product after
        for (let i = nums.length - 1; i >= 0; i--) {
            if (i == nums.length - 1) {
                after[nums.length - 1] = 1;
            } else {
                // add the product of nums[i + 1] and after[i - 1] as current values product after
                after[i] = after[i + 1] * nums[i + 1]; 
            }
        }
            
        // return the products of products before and products after
        return before.map((before, i) => before * after[i]);
    }
}
