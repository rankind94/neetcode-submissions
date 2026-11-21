class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // piles of bananas
    // h represnts total num of hours
    // eat at rate k
    // min of 1 hour per pile
    // minimum k
    // length can be very large
    // piles can be very large
    // O(log n (max pile size))
    minEatingSpeed(piles, h) {
        // declare min k var
        let minK = Math.max(...piles);
        // declare curMax and curMin
        let [curMax, curMin] = [minK, 1]
        // declare test k
        let testK;
        // while test k is not equal to curMax, curMin
        while (curMax >= curMin) {
            // set test k to the curMax - curMin / 2
            const testK = Math.floor((curMax + curMin) / 2);

            // declare hoursRem set to h
            let remH = h;
            // eat bananas in the piles, removing the time it takes at testk
            for (let i = 0; i <= piles.length - 1; i++) {
                let hoursTaken = Math.ceil(piles[i]/testK);
                remH -= hoursTaken;
            }

            // if hoursRem >= 0 
            if (remH >= 0) {
                // set the minK var as the min between testK and minK
                minK = Math.min(minK, testK);
                // set curMax = testK - 1
                curMax = testK - 1;
            } else if (remH < 0) {
                // set curMin to be test k
                curMin = testK + 1;
            }  
        }
            
        // return min k
        return minK;
    }
}
