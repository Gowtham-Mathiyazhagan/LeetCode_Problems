//{ Driver Code Starts
//Initial Template for javascript
'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    let t = parseInt(readLine());
    for(let i=0;i<t;i++)
    {
        let input_line = readLine().split(' ');
        let n = parseInt(input_line[0]);
        let m = parseInt(input_line[1]);
        
        let a = new Array(n);
        let b = new Array(m);
        
        input_line = readLine().split(' ');
        for(let i=0;i<n;i++)
        {
            a[i] = parseInt(input_line[i]);
        }
        
        input_line = readLine().split(' ');
        for(let i=0;i<m;i++)
        {
            b[i] = parseInt(input_line[i]);
        }
        let obj = new Solution();
        
        let ans = obj.doUnion(a, n, b, m);
        console.log(ans);
    }
}

// } Driver Code Ends


//User function Template for javascript


/**
 * @param {number[]} a
 * @param {number} n
 * @param {number[]} b
 * @param {number} m
 * @returns {number}
*/
class Solution {
    //Function to return the count of number of elements in union of two arrays.
    doUnion(a, n, b, m){
        let arr=a.concat(b)
        
        let newArr= new Set([...arr])
        return newArr.size
    }
    
}
