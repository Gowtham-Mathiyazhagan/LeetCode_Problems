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

/* Function to print an array */
function printArray(arr, size)
{
    let i;
    let s='';
    for (i=0; i < size; i++) {
        s += arr[i] + " ";
    }
    console.log(s);
}

function main() {
    let t = parseInt(readLine());
    let i = 0;
    for(;i<t;i++)
    {
        let input_ar0 = readLine().split(' ').map(x=>parseInt(x));
        let n = input_ar0[0];
        let arr = new Array(n);
        let input_ar1 = readLine().split(' ').map(x=>parseInt(x));
        for(let i=0;i<n;i++)
            arr[i] = input_ar1[i];
        let obj = new Solution();
        obj.sort012(arr, n);
        printArray(arr, arr.length);
    }
}
// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} N
 * @returns {number[]}
*/

class Solution {
    
    sort012(arr, N)
    {
        let low=0;
        let high=N-1;
        let mid=0;
        
        while(mid<=high)
        {
            if(arr[mid]===0)
            {
               let temp=arr[mid]
               arr[mid]=arr[low];
               arr[low]=temp;
               low++
               mid++
            }
            else if(arr[mid]===1)
            {
                mid++
            }
            else{
                let temp=arr[high];
                arr[high]=arr[mid];
                arr[mid]=temp
                high--
            }
        }
        
    }
}
// function printArray(arr,N){
//     console.log(arr.join(" "))
// }
// let obj=new Solution

// let arr=[ 0, 2, 1, 2, 0 ];
// let n=arr.length
