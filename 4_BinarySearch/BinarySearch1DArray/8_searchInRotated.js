// Problem statement : Given an integer array arr of size N, sorted in ascending order (with distinct values) and a target value k. Now the array is rotated at some pivot point unknown to you. Find the index at which k is present and if k is not present return -1.
// idea is simple, in binary search the goal is to remove one half of the array
// intution is simple, so if the given array is rotated and sorted , at any given point one part of the array will be sorted and other part will not be sorted 

var search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[low] <= nums[mid]) { // checking if left part of the array is sorted
            if (nums[mid] > target && nums[low] <= target) { // checking if given element is in between sorted left part of the array
                high = mid - 1; // if target is in between, we can take left part of the array
            } else {
                low = mid + 1; // else we will move to right part of the array
            }
        } else { // if left is not sorted, then right will defnitly be sorted
            if (nums[mid] < target && nums[high] >= target) { // checking if given element is in between sorted right part of the array
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

    }

    return -1; // if no element found, return -1
};

console.log(search([7, 8, 9, 1, 2, 3, 4, 5, 6], 4)) // 6