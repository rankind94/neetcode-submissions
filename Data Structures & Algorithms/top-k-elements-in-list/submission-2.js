class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    // answer is always unique
    // any order return
    // array input nums always in sorder
    topKFrequent(nums, k) {
        // declare result array
        const res = [];
        const bucket = [];
        // declare counter object
        const counter = {};
        // loop through array
        nums.forEach((num) => {
            // if havent seen number yet, add it to the counter object
            if (!counter[num]) counter[num] = 0;
            // if it already exists, increment object value
            counter[num] += 1;
        });
            
        for (let [num, freq] of Object.entries(counter)) {
            if (!bucket[freq]){
                bucket[freq] = [num];
            } else {
                bucket[freq].push(num);
            }
        }

        console.log('bucket', bucket)
        
        for (let i = bucket.length-1; i>= 0; i--) {
            if (bucket[i]) res.push(...bucket[i]);
            if(res.length === k) break;
        }
            
        // return result array
        return res;
    }
}
