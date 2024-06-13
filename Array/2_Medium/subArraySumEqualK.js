// Problem Statement: Given an array of integers and an integer k, return the total number of subarrays whose sum equals k.
// Pre fix sum variant 
// Intution is to store prefix sum with no of repeatations in map, sum as key and no of times as value 

var subarraySum = function (arr, k) {
    const map = {};
    // const map = {0: 1} instead of using Point 1 i can use this way also, as when sum is equal to k, line number expected will be 0, and if we dont keep this we will have problem 
    let sum = 0;
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        if (sum === k) { // Point 1 :- this is to make sure to handle when sum is equal to k from starting of the array   
            count++;
        }

        let expected = sum - k;

        if (expected in map) {
            count += map[expected]
        }

        if (sum in map) {
            map[sum]++ // this states that at the given point we can have sub array with map[sum] times which will give k
        } else {
            map[sum] = 1; // as we are storing no of times we have sub array, so when we find first we will start with 1
        }


    }
    return count;
};

