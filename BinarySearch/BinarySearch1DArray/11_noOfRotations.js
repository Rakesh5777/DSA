// Problem Statement: Given an integer array arr of size N, sorted in ascending order (with distinct values). Now the array is rotated between 1 to N times which is unknown. Find how many times the array has been rotated. 
// Intution is simple, we need to find the index of minimum number to find K rotations
// For Example: [7,8,9,1,2,3,4,5,6], minimum number is 1 and index is 3, and given array is also rotated 3 times
// so keep the min of sorted part and search in next half
// FOR OPTIMIZATION ---------------
// the movement, we have crossed the pivot of rotation, we will get nums[low] <= nums[high], the movement we get this, just take the minimum and we dont need to do futher binary search operations 


function findKRotation(arr, n) {
    let low = 0;
    let high = n - 1;
    let min = Infinity;
    let minIndex = -1;

    while (low <= high) {
        let mid = Math.floor(low + (high - low) / 2);

        if (arr[low] <= arr[high]) {
            if (arr[low] < min) { // as per above condition it is SORTED PART, so we are checking with LOW
                minIndex = low;
            }
            break;
        }

        if (arr[mid] <= arr[high]) { // this is if right part is sorted, take the minimum, which is present in mid
            if (arr[mid] < min) { // checking for min with MID
                min = arr[mid];
                minIndex = mid;
            }
            high = mid - 1; // move to left part of array
        } else {
            if (arr[mid] < min) {
                min = arr[mid];
                minIndex = mid;
            }
            low = mid + 1;
        }
    }

    return minIndex;
}

console.log(findKRotation([2, 3, 4, 5, 6, 7, 8, 9, 1], 9)) // 8
console.log(findKRotation([5, 1, 2, 3, 4], 5)) // 1
console.log(findKRotation([1, 2, 3, 4, 5], 5)) // 0;
