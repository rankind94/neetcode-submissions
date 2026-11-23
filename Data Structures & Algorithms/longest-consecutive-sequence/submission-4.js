class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // return the length of the longest conescutive sequence
    longestConsecutive(nums) {
        // create maxLength var = 1
        let maxLength = 0;
        // create curLength var = 1
        let curLength = 0;
        // sort nums
        const sortedNums = nums.sort((a, b) => a - b);
        // loop over nums from index 1 to index length - 1
        for (let i = 0; i <= sortedNums.length - 1; i++) {
            if (sortedNums[i] == sortedNums[i - 1]) continue;
            curLength++;
            // if there is not a difference of 1 between nums[i] & nums[i - 1]
            if (i != 0 && sortedNums[i] - sortedNums[i - 1] != 1) {
                // curLength = 1
                curLength = 1;
            } else {
                // maxLength = Math.max(curLength, maxLength)
                maxLength = Math.max(curLength, maxLength);
            }   
        }
            
            
        // return maxLenth
        return maxLength;
    }           
}
