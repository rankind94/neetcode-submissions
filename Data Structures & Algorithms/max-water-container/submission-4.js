class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    // height can be zero
    // min length is 2
    // sliding window starting at the first and last indicies
    // output is the max volume
    // any two bars
    // dont need to worry about empty heights
    // going to assume that the inputs are always correct
    maxArea(heights) {
        // set max volume variable
        let maxVol = 0;
        // set left and right pointer
        let l = 0;
        let r = heights.length -1;
        // iterate over heights until the pointers meet
        while (l <= r) {
            // find the current volume (min of the heights by the wdith)
            let curVol = Math.min(heights[l], heights[r]) * (r - l);
            // check if its the new maximum
            maxVol = Math.max(curVol, maxVol);
            // move whichever pointer is lower
            (heights[l] <= heights[r]) ? l++ : r--;
        }
           
        // return the max volume
        return maxVol;
    }
}
