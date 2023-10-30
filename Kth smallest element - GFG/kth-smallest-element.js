//{ Driver Code Starts
//Initial Template for javascript

"use strict";

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;



process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });

  main();
});

function readLine() {
  return inputString[currentLine++];
}


function main() {
  let t = parseInt(readLine());
  let i = 0;
 
  for (; i < t; i++) {
    let N = parseInt(readLine());
    let arr = readLine().trim().split(" ").map((x) => parseInt(x));
    let k = parseInt(readLine());
    let obj = new Solution();
    let res = obj.kthSmallest(arr,0,N-1,k);
    console.log(res);
  }

}

// } Driver Code Ends


//User function Template for javascript

/**
 * @param {number[]} arr
 * @param {number} l (starting index of the array i.e 0)
 * @param {number} r (ending index of the array i.e size-1)
 * @param {number} k
 * @return {number}
*/

class Solution {
  kthSmallest(arr,l,r,k){
 function count(arr, mid) {
    var cnt = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= mid)
            cnt++;
    }
    return cnt;
}

    // var l = Math.min.apply(null,nums);
    // var r = Math.max.apply(null,nums);

    for (var i = 0; i < arr.length; i++) {
        l = Math.min(l, arr[i]);
        r = Math.max(r, arr[i]);
    }

    // The answer lies between the minimum and maximum elements
    while (l < r) {
        var mid = Math.floor(l + (r - l) / 2);
        // If the count of elements less than or equal to 'mid' is less than 'k',
        // move the 'low' boundary to 'mid + 1'
        if (count(arr, mid) < k)
            l = mid + 1;
        // Otherwise, move the 'high' boundary to 'mid' to find a better answer
        else
            r = mid;
    }
    return l
}
}

let obj= new Solution