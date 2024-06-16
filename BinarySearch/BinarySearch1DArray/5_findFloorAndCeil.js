// Problem statement:  Function to find floor and ceiling of X in an unsorted array nums.

function findFloorAndCeil(nums, x) {
    // Sort the array to facilitate binary search for floor and ceiling
    nums.sort((a, b) => a - b);

    let floor = findFloor(nums, x);
    let ceil = findCeil(nums, x);

    return [floor, ceil];
}

function findCeil(nums, x) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1; // Initialize answer to store result

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        // as it is ceil, nums[mid] should be greater than x
        if (nums[mid] >= x) {
            ans = nums[mid];
            high = mid - 1; // Look for a smaller ceil in the left half
        } else {
            low = mid + 1; // Look for ceil in the right half
        }
    }

    return ans;
}

function findFloor(nums, x) {
    let low = 0;
    let high = nums.length - 1;
    let ans = -1; // Initialize answer to store result

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        // as it is floor, x should be greater then nums[mid]
        if (nums[mid] <= x) {
            ans = nums[mid];
            low = mid + 1; // Look for a larger floor in the right half
        } else {
            high = mid - 1; // Look for floor in the left half
        }
    }

    return ans;
}

console.log(findFloorAndCeil([5, 6, 8, 9, 6, 5, 5, 6], 10));