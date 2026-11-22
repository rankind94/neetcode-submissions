class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    // return array of arrays
    // length is 1 to 1000
    // need to consider start and ends
    // naive solution is the compare the cur to the rest
    // actually going to sort based on start and find the max end length
    merge(intervals) {
        // create output array
        intervals.sort((a, b) => a[0] - b[0]);
        const merged = [intervals[0]]
        // sort intervals based on the start value
        for (let i = 1; i <= intervals.length - 1; i++) {
            const [start, end] = intervals[i];
            const last = merged[merged.length - 1];

            if (start <= last[1]) {
                last[1] = Math.max(end, last[1]);
            } else {
                merged.push([start, end]);
            }
        }

        return merged;
    }
}
