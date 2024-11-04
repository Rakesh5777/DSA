// Problem statement : Given a sorted array of N integers, write a program to find the index of the last occurrence of the target key. If the target is not found then return -1.
// we have to solve this with binary search
// run two loops, one to find lowRange, and another to find highRange

const searchRange = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    // these two are to store result 
    let lowRange = -1;
    let highRange = -1;

    while (low <= high) {
        let mid = Math.floor(low + ((high - low) / 2));

        // as we already got target, we are searching for possible index which is lower than current index, so we will go left side (<-) by moving high = mid - 1
        if (nums[mid] === target) {
            lowRange = mid;
            high = mid - 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }

    }

    // resetting low and high for calculation
    low = 0;
    high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        // as we already got target, we are searching for possible index which is high than current index, so we will go right side (->) by moving low = mid + 1
        if (nums[mid] === target) {
            highRange = mid;
            low = mid + 1;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [lowRange, highRange]
};

console.log(searchRange([5, 7, 7, 8, 8, 9], 8)) // 3, 4