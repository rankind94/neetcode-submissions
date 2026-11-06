class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // dont have to be in order
    // O(n) time
    longestConsecutive(nums) {
        // create result int variable
        let maxLen = 0;
        // create starts
        const numsSet = new Set(nums)
        // iterate over nums
        nums.forEach((num) => {
            let curLen = 1;
            let curNum = num;
            // if -1 doesnt exist, its the start of a sequence
            if (!numsSet.has(num - 1)) {
                // then check the set for follow ups
                // set max if its the longest
                while (numsSet.has(curNum + 1)) {
                    curLen++;
                    curNum = curNum + 1;
                }
                maxLen = Math.max(curLen, maxLen) 
            }     
        })
        // return max
        return maxLen;
    }
}
