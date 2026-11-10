class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // min is k, max is the largest pile per h
    // return min k that works
    // can be up to 10,000 piles
    // num of hours can be piles length to 1 bil
    // pile can be 1 to 1 bil
    // very large, should beat o(n)
    minEatingSpeed(piles, h) {
        // find the largest pile, and set that as the top possible k and min as 1
        let [l, r] = [1, Math.max(...piles)];
        // set a min val
        let minK = r;
        // while l < r
        while (l <= r) {
            // take middle value
            let testK = Math.floor((l+r)/2);
            // set remH as h
            let remH = h;
            // run a for loop over the piles, i = 0, i <= piles.length -1; i++
            for (let i = 0; i <= piles.length -1; i++) {
                // time = num in pile / ban per hour, math.ceil ensures 1 is the lowest
                // subtract time from remH
                remH -= Math.ceil(piles[i] / testK);
            }

            // if remH, we can go slower
            if (remH >= 0) {
                // take lower half
                minK = Math.min(minK, testK);
                r = testK - 1;
            // if no remH, speed up
            } else {
                // take upper half
                l = testK + 1;
            }       
        }
            
        // return the minK
        return minK;
    }
}
