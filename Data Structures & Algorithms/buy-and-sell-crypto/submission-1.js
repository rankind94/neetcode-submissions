class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // if non profitable, dont sell
    // are values unique?
    maxProfit(prices) {
        // set maxProfit to 0
        let maxProfit = 0;
        // if only 1 price, return 0
        if (prices.length <= 1) return 0;
        // set l and r for indexes
        let buy = 0;
        let sell = 1;
        // while r < prices.length && l < prices.length - 1
        while (sell < prices.length) {
            // set curProfit
            let curProfit = prices[sell] - prices[buy];
            
            if (prices[buy] < prices[sell]) {
                maxProfit = Math.max(curProfit, maxProfit)
            } else {
                buy = sell;
            }
            sell++;
        }
            
        // return maxProfit
        return maxProfit;
    }
}
