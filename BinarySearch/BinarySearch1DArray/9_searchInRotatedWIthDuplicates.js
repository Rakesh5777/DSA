// Problem Statement: Given an integer array arr of size N, sorted in ascending order (may contain duplicate values) and a target value k. Now the array is rotated at some pivot point unknown to you. Return True if k is present and otherwise, return False. 
// idea is simple, in binary search the goal is to remove one half of the array
// intution is simple, so if the given array is rotated and sorted , at any given point one part of the array will be sorted and other part will not be sorted 
// but as we will have duplicates we have to cover one edge case
// [3,1,2,3,3,3,3] now in the array, low, mid and high three are 3, so we can't predict which part is sorted
// but one thing for sure is, 3 is not answer, as if 3 is answer, we would have already returned true
// so we will trim down the searching space by one step
// now we will search between [1,2,3,3,3] now it is simple rest of the code will take care 

const search = function (nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (nums[mid] === target) {
            return true;
        } else if (nums[mid] === nums[low] && nums[high] === nums[mid]) { // we will cover the DUPLICATE EDGE CASE HERE  
            // we will just trim down search space 
            low++;
            high--;
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

    return false; // if no element found, return -1
};