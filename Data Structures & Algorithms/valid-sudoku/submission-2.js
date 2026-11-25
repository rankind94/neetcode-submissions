class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    // each row must contain the digits 1-9, no dupes
    // column is 1-9 no dupes
    // each grid 1-9 no dupes
    isValidSudoku(board) {
        // confirm row is valid
        // loop over all rows index starting at 0 and ending at <=8
        for (let i = 0; i <= 8; i++) {
            // create a row set
            const rowSet = new Set();
            // loop over the row with index starting at 0 and ending <= 8
            for (let j = 0; j <= 8; j++) {
                if (board[i][j] == '.') continue;
                // check if the row has the value
                if (rowSet.has(board[i][j])) {
                    // if true, return false(not valid)
                    return false;
                // else, add it to the set
                } else {
                    rowSet.add(board[i][j]);
                }
            }
                
        }
            

        // confirm col is valid
        // loop over all rows index starting at 0 and ending at <=8
        for (let i = 0; i <= 8; i++) {
            // create a row set
            const colSet = new Set();
            // loop over the row with index starting at 0 and ending <= 8
            for (let j = 0; j <= 8; j++) {
                if (board[j][i] == '.') continue;
                // check if the row has the value
                if (colSet.has(board[j][i])) {
                    // if true, return false(not valid)
                    return false;
                // else, add it to the set
                } else {
                    colSet.add(board[j][i]);
                }
            }   
        }

        // confirm square is valid
        // create squareSet
        for (let i = 0; i <= 8 ; i = i + 3) {
            for (let j = 0; j <= 8; j = j + 3) {
                const squareSet = new Set();

                for (let r = i; r <= i + 2; r++) {
                    for (let c = j; c <= j + 2; c++) {
                        if (board[r][c] == '.') continue;
                        if (squareSet.has(board[r][c])) {
                            return false;
                        } else {
                            squareSet.add(board[r][c]);
                        }
                    }
                }
            } 
        }
        // return true

        return true;
    }
}
