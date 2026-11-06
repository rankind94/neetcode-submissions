class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        // grab total product, could use reduce
        // create output array
        const output = [];
        // create object that has product before and product after as values
        const productsBefore = {};
        productsBefore[0] = 1;
        productsBefore[1] = nums[0];
        // change this to for loop if time to avoid the checks
        for (let i = 2; i < nums.length; i++) {
            productsBefore[i] = productsBefore[i - 1] * nums[i - 1];
        }

        const productsAfter = {};
        productsAfter[nums.length - 1] = 1;
        productsAfter[nums.length - 2] = nums[nums.length - 1];

        output[nums.length - 1] = productsBefore[nums.length - 1];
        output[nums.length - 2] = productsBefore[nums.length - 2] * productsAfter[nums.length - 2]


        // loop over array backwards getting products after
        for (let i = nums.length - 3; i >= 0; i--) {
            productsAfter[i] = productsAfter[i + 1] * nums[i + 1];

            output[i] = productsAfter[i] * productsBefore[i]
        }

            
        // return array
        return output;
    }
}
