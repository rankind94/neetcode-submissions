class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // output = max water
    // two pointers at start
    maxArea(heights) {
        // set max output
        let max = 0;
        // set two pointers
        let [l, r] = [0, heights.length - 1];
        
        // while right pointer is in bounds
        while (l < r) {
            const curVol = Math.min(heights[l], heights[r]) * (r - l);
            // check cur vol, if its max set new max
            max = Math.max(max, curVol);
            // grow until we find a new high
            if (heights[l] >= heights[r]) {
                r--;
            } else {
                l++
            }
        }
            
        // return max
        return max;
    }
}

// 1, 1
