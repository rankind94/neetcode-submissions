class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    // return 0 if no profit possible
    maxProfit(prices) {
        // set buy and sell, and max profit variables
        let b = 0;
        let s = 1;
        let max = 0;
        // while sell day exists
        while (s < prices.length) {
            // if profitable
            if (prices[b] < prices[s]) {
                const cur = prices[s] - prices[b];
                // set max as max between cur prof and max prof
                max = Math.max(cur, max);
                
                // if not proitable
            } else {
                // set buy to current sell day
                b = s;
            }

            // always move sell by a day
                s++;
        }
        // return max prfoit;
        return max;
    }
}
