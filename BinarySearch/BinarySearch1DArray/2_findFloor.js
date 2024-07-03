// Problem statement : Given a sorted array arr[] of size n without duplicates, and given a value x. Floor of x is defined as the largest element k in arr[] such that k is smaller than or equal to x. Find the index of k(0-based indexing).
// we need to find largest element which is closer to given x, condition is x >= element 

function findFloor(nums, x) {

    let low = 0;
    let high = nums.length - 1;

    let ans = -1; // this is to store answer

    while (low <= high) {

        let mid = Math.floor(low + (high - low) / 2);

        // as per given condition, x should be greater then largest possible element
        if (nums[mid] <= x) { // so if nums[mid] is less than x, this might be my answer, as we already got smaller number than x, going left (<-) will give even more smaller, so we go right (->)
            ans = mid;
            low = mid + 1;
        } else { // if nums[mid] > x, then nums[mid] is not my answer and we need to look for answer left to it, so high is updated to mid - 1
            high = mid - 1;
        }

    }

    return ans;

}

console.log(findFloor([1, 2, 8, 10, 11, 12, 19], 0)) // -1
console.log(findFloor([1, 1, 1, 1, 1, 1, 1, 2, 2, 3], 1)) // 6