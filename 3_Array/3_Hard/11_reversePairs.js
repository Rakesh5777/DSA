// Problem Statement: Given an array of numbers, you need to return the count of reverse pairs. Reverse Pairs are those pairs where i<j and arr[i]>2*arr[j].
// this is same like count inversions, but we have to add simple logic to count reverse pairs in sort and merge function
var reversePairs = function (nums) {
    if (nums.length === 0) return 0;
    return merge(nums, 0, nums.length - 1);
};

function merge(nums, low, high) {
    let count = 0;
    if (low < high) {
        let mid = Math.floor((low + high) / 2);
        count += merge(nums, low, mid);
        count += merge(nums, mid + 1, high);
        count += sortAndMerge(nums, low, mid, high);
    }
    return count;
}

function sortAndMerge(nums, low, mid, high) {
    let left = low;
    let right = mid + 1;
    let temp = [];
    let count = 0;

    // Count reverse pairs
    // [3, 5]   [1]
    // we check for 3 > 2 * 1 as condition passes
    // we track count
    while (left <= mid) { // as we have traverse full left side array
        while (right <= high && nums[left] > 2 * nums[right]) right++; // to find the index where condition doesn't match
        count += (right - (mid + 1)); // this is to find length
        left++;
    }

    // Reset pointers for merging
    left = low;
    right = mid + 1;

    // Merge the two sorted halves
    while (left <= mid && right <= high) {
        if (nums[left] <= nums[right]) {
            temp.push(nums[left]);
            left++;
        } else {
            temp.push(nums[right]);
            right++;
        }
    }

    while (left <= mid) {
        temp.push(nums[left]);
        left++;
    }

    while (right <= high) {
        temp.push(nums[right]);
        right++;
    }

    for (let i = 0; i < temp.length; i++) {
        nums[low + i] = temp[i];
    }

    return count;
}

console.log(reversePairs([2, 4, 3, 5, 1])) // 3