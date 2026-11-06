class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    // need to use number with delimeter with number
    encode(strs) {
        // create output string
        let output = '';
        // iterate over the input array
        strs.forEach((str) => {
            // add the string with the number of chars and a delimiter at the start
            output += `${str.length}#${str}`;
        })

        return output;
            
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        // create output array
        const output = [];
        // create cur length var
        let curLength = 0;
        // create pointer
        let i = 0;
        // iterate over the string
        while (i < str.length) {
            if (str[i] == '#') {
                const start = i + 1;
                const end = start + curLength;

                output.push(str.slice(start, end));

                i = end;

                curLength = 0;
            } else {
                console.log('i', i)
                curLength = curLength * 10 + Number(str[i]);
                console.log('curLength', curLength);
                i++;
            }
        }

        return output;
            
    }
}
