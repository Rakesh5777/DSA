// Problem Statement: Given an array of length N. Peak element is defined as the element greater than both of its neighbors. Formally, if 'arr[i]' is the peak element, 'arr[i - 1]' < 'arr[i]' and 'arr[i + 1]' < 'arr[i]'. Find the index(0-based) of a peak element in the array. If there are multiple peak numbers, return the index of any peak number.
// Intution is simple, at any given number go towards greater number
// given nums[-1] = nums[n] = -∞
// First cover all edge cases 
//  - if given array is has only ONE element, return that
//  - if nums[0] > nums[1] then return 0
//  - if nums[n - 1] > nums[n - 2] return n - 1 index
// then simple binary search to go towards greater side (we are going greater side because, going towards lesser side will not guarantee but greater side will be guarantee, think with common sense)

var findPeakElement = function (nums) {
    let n = nums.length;
    let low = 0;
    let high = n - 1;

    // edge cases
    if (n === 1) return 0;
    if (nums[0] > nums[1]) return 0;
    if (nums[n - 1] > nums[n - 2]) return n - 1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        // we can do like the also without checking for edge cases
        // let before = nums[mid - 1] ? nums[mid - 1] : -Infinity;
        // let after = nums[mid + 1] ? nums[mid + 1] : -Infinity;

        // if (before < nums[mid] && after < nums[mid]) return mid;

        if (nums[mid - 1] < nums[mid] && nums[mid + 1] < nums[mid]) return mid; // if we find peak number return it

        if (nums[mid + 1] >= nums[mid]) { // just go for greater or equal to side
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
};

console.log(findPeakElement([1, 2, 1, 3, 5, 6, 4])) // 5