class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // always unique
    // return in any order
    // nums is long, min 1;
    // nums can be between -1k, and 1k, no affect of strat, can be zero tho so watch out in conditionals
    // k can be all of elements
    topKFrequent(nums, k) {
        // create a tally object
        const tally = {};
        let output = [];
        // do a for each loop over nums
        nums.forEach((num) => {
            // if doesnt exist, create the key with a value of 0
            if (!tally[num]) tally[num] = 0;
            // increment the key
            tally[num]++;
        })

        // sort the entries array of tallies by their values, and grab the first k entries
        let sortedEntries = Object.entries(tally).sort((a, b) => b[1] - a[1]).slice(0, k);

        // push the keys of each remaining entry to form output;
        sortedEntries.forEach((ent) => output.push(ent[0]));
            
        // return output
        return output;
    }
}
