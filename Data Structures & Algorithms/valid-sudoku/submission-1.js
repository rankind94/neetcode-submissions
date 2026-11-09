class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // return a boolean
    // doesnt need to be done, just valid at the current time
    // every index is a . or a digit
    // valid if no repeats of 1 - 9 in a row
    // valid if no repeats of 1 - 9 in a column
    // valid if no repeast of 1 - 9 in a square
    // space not a big concern since small input
    // can we assume that no digit larger than 9 are in the input?
    // shooting for O(3N) for time complexity
    // to optimize, i bet theres a way to make this O(N) by keep tracking every time you see a number in an rows, squares, columns object

    isValidSudoku(board) {
        // check rows, returning false if not valid
        // need to make sure each array doesnt contain any repeated numbers
        // set seems like a good approach here

        // iterate over each row array in board using a for loop i = 0, i <= board.length - 1
        for (let i = 0; i <= board.length - 1; i++) {
            // create a new rowsSet with every iteration
            // create row var
             const rowsSet = new Set();
             const row = board[i];
             // iterate using a for loop of each row (array in board), j = 0, j <= row.length -1
             for (let j = 0; j <= row.length - 1; j++) {
                // if the character is ".", continue
                if (row[j] == ".") continue;

                // if seen in rowsSet
                // return false, meaning board is not valid
                if (rowsSet.has(row[j])) return false;

                // add the current number to the set
                rowsSet.add(row[j]);
             }   
        }


        // check columns, returning false if not valid
        // make sure there are no repeats in each arrays matching indicies

        // create for loop to iterate over the current column i = 0, i <= board[0].length - 1;
        for (let i = 0; i <= board[0].length - 1; i++) {
            // create a colset
            const colSet = new Set();

            // create for loop to check each row in the current column, j = 0, j <= board.length - 1
            for (let j = 0; j <= board.length - 1; j++) {
                // let curSquare
                const curSq = board[j][i];

                // if . continue
                if (curSq == ".") continue;

                // if (colSet.has(col[j][i])) (been seen before)
                // return false, not valid
                if (colSet.has(curSq)) return false;
                    
                // add the current number to the set
                colSet.add(curSq);
            }     
        }
            
        

        // check square returning false if not valid
        // set initial l, r, t, b variables to check the square
        let [l, r, t, b] = [0, 2, 0, 2];
        
        // while t, b are within the board
        while (b <= board.length - 1){
            // create a square set
            const sqSet = new Set();
            // create a for loop that checks by row, i = l, i <= r
            for (let i = l; i <= r; i++) {
                // create a for loop that checks by column j = t, i <= b
                for (let j = t; j <= b; j++) {
                    // set curSquare
                    let curSq = board[j][i];
                    // if curSquare == . continue;
                    if (curSq == ".") continue;
                    // if square set has board[i][j] return false
                    if (sqSet.has(curSq)) return false;
                    // add cur sq to set
                    sqSet.add(curSq);
                }     
            }
                
            // if r is not in its last position
            if (r < 8) {
                // increment l and r by 3
                l = l + 3;
                r = r + 3;
            // else increment t and b by 3 and set l to 0 and r to 2
            } else {
                t = t + 3;
                b = b + 3;
                l = 0;
                r = 2;
            }
        }
            

        // return true if all checks pass
        return true;
    }
}
