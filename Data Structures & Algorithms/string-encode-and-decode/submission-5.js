class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // string can be empty
    // need delimeter and length of string for encode
    encode(strs) {
        // create output string
        let strOut = ''
        // do a for each loop over strs array
        strs.forEach((str) => {
            // set the string to itself + length of string, delimeter, and string itself using string interpolation
            strOut = strOut + `${str.length}#${str}`;
        })
            
        // return the output string
        return strOut;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // create an output array
        const output = [];
        // track the start of the string with a pointer
        let i = 0;
        // create a str length val and set it to 0
        let strLen = 0;
        // while the pointer is less than strs.length
        console.log('str', str)
        while (i < str.length) {
            // if the char is a digit, multiply the digit by 10 and add it to the str length var
            if (str[i] != '#') {
                strLen = Number(str[i]) + strLen * 10;
                i++;
            } else {
                output.push(str.slice(i + 1, i + 1 + strLen));
                // move i to the next char after next index + str length
                i = i + 1 + strLen;
                // reset str length var
                strLen = 0;
            } 
        }
            
        // return the output array
        return output;
    }
}
