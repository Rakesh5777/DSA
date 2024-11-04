// Problem statement: Given a sorted array Arr of size N and a number X, you need to find the number of occurrences of X in Arr.
// find start index of x, and find last index of x, now last - first + 1 is the no of occurances

function count(nums, x) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    let lowRange = -1;
    let highRange = -1;

    // we will find lowRange in this while
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        // this is to find lowRange
        if (nums[mid] === x) {
            lowRange = mid;
            high = mid - 1;
        } else if (nums[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }

    low = 0;
    high = n - 1;

    // we will find high rnage in this while
    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);
        // this is to find high range
        if (nums[mid] === x) {
            highRange = mid;
            low = mid + 1;
        } else if (nums[mid] > x) {
            high = mid - 1
        } else {
            low = mid + 1
        }
    }

    if (lowRange === -1) { // this is to handle a case where, x is not in array, then lowRange will be -1 and final answer will be -1 + -1 + 1 and answer will be 1, which is wrong 
        lowRange = 0 // so we will reset this
    }

    return highRange - lowRange + 1;
}



console.log(count([1, 1, 1, 2, 2, 2, 2, 2, 3, 4, 4, 4, 4], 2)) // 5