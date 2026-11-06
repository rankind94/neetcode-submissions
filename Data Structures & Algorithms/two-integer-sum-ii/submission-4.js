class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        // array is sorted
        // return number array
        // one valid solution
        // is adding an extra variable o(1)?
        // one indexed

        // set left pointer
        let l = 0;
        let r = numbers.length - 1;;
        // set right pointer

        // while left < right
        while (l < r) {
            const tot = numbers[l] + numbers[r];
            // if less than target
            if (tot < target) {
                // left increment
                l++;
            // if greater than target
            } else if (tot > target) {
                // right decrement
                r--;
            // if equal, return indicies in an aray
            } else {
                return [l + 1, r + 1];
            }
        }     
    }
}
