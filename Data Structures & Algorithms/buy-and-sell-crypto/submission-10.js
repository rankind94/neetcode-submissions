class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // two pointers since whats in between doesnt matter
    maxProfit(prices) {
        // set max prof variable
        let maxProf = 0;
        // set two pointers starting at first index
        let [l, r] = [0, 0]
        // while right is in bounds
        while (r < prices.length) {
            // if l < r
            if (prices[l] < prices[r]) {
                // check prof and set max prof
                maxProf = Math.max(prices[r] - prices[l], maxProf)
                // set left pointer equal to r
            } else if (prices[l] > prices[r]) {
                l = r;
            }
            // increment right pointer by 1
            r++;
        }
            
        // return max prof
        return maxProf;
    }
    // 7, 7 -> 7, 1
    // 7, 1 -> 1 , 5
    // 1, 5 -> 1 , 3 max = 4
    // 1, 3 -> 1, 6
    // 1,6 -> 1, 4 max = 5
    // 1, 4 -> 1 , undefined
    // done
}
