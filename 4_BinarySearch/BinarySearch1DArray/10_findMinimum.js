// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find the minimum element in the array. 
// intution is simple, have a minimum variable, as it is rotated and sorted, there will be one sorted part and another non sorted part
// so keep the min of sorted part and search in next half
// FOR OPTIMIZATION ---------------
// the movement, we have crossed the pivot of rotation, we will get nums[low] <= nums[high], the movement we get this, just take the minimum and we dont need to do futher binary search operations 

const findMin = function (nums) {
    let low = 0;
    let high = nums.length - 1;

    let minimum = Infinity; // this is to store minimum value;

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        if (nums[low] <= nums[high]) { // this is for OPTIMIZATION, the movement we find array from low to high is sorted
            minimum = Math.min(minimum, nums[low]); // take the minimum
            break; // and we dont need to do further binary search operations
        }

        if (nums[low] <= nums[mid]) { // checking if left part of the array is sorted
            minimum = Math.min(minimum, nums[low]);  // take the minimum in left half, and search for possible minimum in right half
            low = mid + 1;
        } else { // else, right part will be sorted
            minimum = Math.min(minimum, nums[mid]); // take the minimum in right half, and search for possible minimum in left half
            high = mid - 1;
        }

    }

    return minimum;

};