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
        let minIndex = 0;
        let maxIndex = nums.length - 1;
        let counter = 0;
        while (counter < 10 && maxIndex >= minIndex) {
            // if greater than, take lower half and repeat
            let curIndex = Math.floor((maxIndex + minIndex) / 2);
            console.log('maxIndex, minIndex, curIndex, nums[curIndex]', maxIndex, minIndex, curIndex, nums[curIndex] );
            console.log('curArray', nums.slice(minIndex, maxIndex + 1));

            if (nums[curIndex] > target) {
                maxIndex = curIndex - 1;
                console.log('maxIndex after', maxIndex)
            }
            // if less than, take upper half and repeat
            if (nums[curIndex] < target) {
                minIndex = curIndex + 1;
                console.log('minIndex after', minIndex)
                console.log('maxIndex after', maxIndex)
            } 

            if (nums[curIndex] == target) return curIndex;

            counter++;
        };

        return -1;
    }
}
