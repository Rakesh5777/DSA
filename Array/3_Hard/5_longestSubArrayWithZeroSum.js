// Problem Statement: Given an array containing both positive and negative integers, we have to find the length of the longest subarray with the sum of all elements equal to zero.
// This is simple prefix sum problem
// store sum till that index in map, and check if we already have expected sum in map and proceed

function maxLen(arr, n) {
    let map = { 0: -1 }; // this is to initilise 0 with -1, this will come in handy when sub array sum is zero from start of the index

    let maxLength = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += arr[i];

        let expected = sum - 0;

        // i dont need to do this if i have initialised map with {0: -1} so when i find i - map[expected] we will have i - -(1) = i + 1 that will be length
        // if(sum === 0) {
        //     maxLength = Math.max(i, maxLength);
        //     continue;
        // }

        if (expected in map) {
            let length = i - map[expected]; // by doing this we will find the length of sub array
            maxLength = Math.max(length, maxLength);
        }

        if (!(sum in map)) { // as we are finding maximum length, we shouldn't replace this, as we are going from left to rigth, if we replace length obviously decrease
            map[sum] = i;
        }

    }

    return maxLength;
}