class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    // decide how fast to eat
    // create an array of max being the biggest pile, min being 1
    // binary search through the array, checking if it would work
    // how do we know we've found the min
    minEatingSpeed(piles, h) {
        // create array of possible speeds
        let mostK = Math.max(...piles);

        // set minK var
        let minK = mostK;

        // create pointers
        let [l, r] = [1, mostK];

        while (l <= r) {
            // check if fast enough
            let remH = h;
            let testK = Math.floor((l+r)/2);
            
            for (let i = 0; i < piles.length; i++) {
                const hTaken = piles[i] < testK ? 1 : Math.ceil(piles[i] / testK);
                remH = remH - hTaken;
            }

            // check remaining h to see if too slow or too fast
            if (remH < 0) {
                l = testK + 1;
            } else {
                r = testK - 1;
                minK = Math.min(minK, testK);
            }
        }
        return minK;
    }
}
