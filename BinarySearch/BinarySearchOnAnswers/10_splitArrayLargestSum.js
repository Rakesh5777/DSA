// Problem Statement: Given an integer array ‘A’ of size ‘N’ and an integer ‘K'. Split the array ‘A’ into ‘K’ non-empty subarrays such that the largest sum of any subarray is minimized. Your task is to return the minimized largest sum of the split.
// A subarray is a contiguous part of the array.

// intution is low and high are sum of array 
// BS will work based on possible count of mid of low and high 
// check 9_bookAllocate problem for more detailed explanation



var splitArray = function (nums, k) {
    let low = Math.max(...nums);
    let high = nums.reduce((acc, curr) => acc + curr, 0);

    while (low <= high) {
        let mid = Math.floor((high + low) / 2);
        let possibleCount = possibleSplit(nums, mid);

        if (possibleCount <= k) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    return low;
};

function possibleSplit(nums, limit) {
    let splitCount = 1;
    let currentLimit = nums[0];

    for (let i = 1; i <= nums.length - 1; i++) {
        if (currentLimit + nums[i] <= limit) {
            currentLimit += nums[i];
        } else {
            splitCount++;
            currentLimit = nums[i];
        }
    }

    return splitCount;
} 