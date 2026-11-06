class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    // sorted already
    // given target
    search(nums, target) {
        // create curIndex
        let curArray = [...nums];
        let index = -1;
        let curIndex = Math.round((curArray.length - 1) / 2);
        let curVal = curArray[curIndex];

        while (curVal != target && curArray.length > 1) {
            // if greater than, take lower half and repeat
            if (curVal > target) {
                curArray = curArray.slice(0, curIndex);
                
            }
            // if less than, take upper half and repeat
            if (curVal < target) {
                curArray = curArray.slice(curIndex + 1, curArray.length);
            } 

            curIndex = Math.round((curArray.length - 1) / 2);
            curVal = curArray[curIndex];
        };

        // check if curVal matches target
        if (curVal == target) index = nums.indexOf(curVal)
         
        // return index
        return index
    }
}
