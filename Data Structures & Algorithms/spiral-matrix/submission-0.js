class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    // output is an array
    // can have unlimited amount of rows
    // can have up to 10 columns
    // O(n) time complexity, O(1) space complexity
    spiralOrder(matrix) {
        // create top bottom left and right variables, to keep track of which sides have been visited
        let [t, b, l, r] = [0, matrix.length - 1, 0, matrix[0].length - 1];
        // create output array
        const output = [];
        // while there are sides that need to be visited
        while (t <= b && l <= r) {
            // add the values in the top row
            for (let col = l; col <= r; col++) {
                output.push(matrix[t][col]);
            }
            // increment the top variable
            t++;
            // add the values in the right column
            for(let row = t; row <= b; row++) {
                output.push(matrix[row][r]);
            }
            // decrement the right variable
            r--;
            // if top <= bottom
            if (t <= b) {
                // add the bottom row
                for (let col = r; col >= l; col--) {
                    output.push(matrix[b][col]);
                };
                // decrement the bottom variable
                b--;
            }

            // if left <= right   
            if (l <= r) {
                // add the left column
                for(let row = b; row >= t; row--) {
                    output.push(matrix[row][l]);
                }
                // increment the left variable
                l++;
            }
        } 

        return output;     
            
    }
}
