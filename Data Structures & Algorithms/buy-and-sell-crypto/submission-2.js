class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // only update left pointer if trade is not profitable
    // always update new sell price
    maxProfit(prices) {
        // if length is 1, return 0
        if (prices.length <= 1) return 0;
        let maxProfit = 0;
        let buy = 0;
        let sell = 1;
        // while still able to sell
        while (sell < prices.length) {
             // if sell price > buy price
             if (prices[buy] < prices[sell]) {
                // set max to the max between current profit and max profit
                maxProfit = Math.max(prices[sell] - prices[buy], maxProfit);
             } else {
                 // if not, set the buy to the sell price
                buy = sell;
             };
            // increment sell price
            sell++;
        }
           
        // return max profit
        return maxProfit;
    }
}
