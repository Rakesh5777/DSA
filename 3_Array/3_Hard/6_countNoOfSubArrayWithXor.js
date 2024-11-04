// Problem Statement: Given an array of integers A and an integer B. Find the total number of subarrays having bitwise XOR of all elements equal to k.
// This is Pre fix sum problem
// In the Map store the count of how many times expected sub array is formed

function maximumLength(nums, k) {

    let map = { 0: 1 }; // this is to store 0, which will come only if xor is valid from start of the index

    let xor = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        xor ^= nums[i]; // calculate the xor

        let expected = xor ^ k; // this is required xor 


        // if i have {0: 4} 
        // which means, if my expected is 2, then i have 4 possible sub array which will give be 2
        // that is why i have to add all possible sub array to the current count

        if (expected in map) {
            count += map[expected]; // if expected is found please all it to the count
        }

        if (xor in map) {
            map[xor]++; // increment the count
        } else {
            map[xor] = 1; // initialise the count
        }
    }

    return count;

}