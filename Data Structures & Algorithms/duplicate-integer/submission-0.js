class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        // consider if its actually array of numbers
        if (!Array.isArray(nums)) return false;
        // create an empty array that will hold duplicates
        const duplicates = [];
        // iterate through input array
        for (const num of nums) {
            // if duplciates array has number, return true
            if (duplicates.includes(num)) return true;
            duplicates.push(num);
        }
        //return false
        return false;
    }
}
