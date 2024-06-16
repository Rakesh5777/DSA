// Problem statement: to find the ceil of the x in the given array, k will be ceil only if k >= x and k should be the smallest element which satisfies the previous condition 

function findCeil(nums, x) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1; // Initialize answer to store result

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        // as it is ceil, nums[mid] should be greater than x
        if (nums[mid] >= x) {
            ans = mid;
            high = mid - 1; // Look for a smaller ceil in the left half
        } else {
            low = mid + 1; // Look for ceil in the right half
        }
    }

    return ans;
}

console.log(findCeil([1, 2, 5, 7, 9, 11, 12], 10));
