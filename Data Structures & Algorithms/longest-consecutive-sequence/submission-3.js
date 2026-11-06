class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    // consecutive nums
    // sliding window, with both starting at the front
    // only care about the numbers that start
    // output is the length
    // need to consider empty ones as well
    longestConsecutive(nums) {
        // set maxLen var
        let maxLen = 0;
        // create nums as a set
        let numSet = new Set(nums);
        // iterate over nums
        numSet.forEach((num) => {
            // if the previous int doesnt exist, we need to check
            if (!numSet.has(num - 1)) {
                // set curLen var
                let curLen = 1;
                // set curNum var
                let curNum = num;
                // loop and check set until chain is broken
                while(numSet.has(curNum + 1)) {
                    curLen++;
                    curNum++;
                }
                // compare curLen and maxLen, setting the new max
                maxLen = Math.max(curLen, maxLen);
            }    
        });

        return maxLen;     
    }
}
