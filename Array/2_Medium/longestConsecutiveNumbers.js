// Problem Statement: You are given an array of ‘N’ integers. You need to find the length of the longest sequence which contains the consecutive elements.
// put all elements in set to remove duplicates
// then check each element does it have any previous in the array, if it doesnt have then check for longest consecutive and save the length
// if previous number is there then just ignore to find longest consecutive because we would have already checked it 

function longestConsecutiveNumbers(nums) {

    if (nums.length <= 1) return nums.length;
    const set = new Set(nums);

    let maxLenght = 1;

    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentLength = 1;
            while (set.has(num + currentLength)) currentLength++;
            if (currentLength > maxLenght) maxLenght = currentLength;
        }
    }

    return maxLenght;

}

// intution is simple, sort the array and increase pointer if elements are consecutive, if not restart the counter, and store the max value
// this is better solution as we use sorting algo
function longestConsecutiveNumbersWithoutDuplicates(nums) {
    nums = quickSortWrapper(nums);

    let max = 1;
    let consecutiveCount = 1;

    for (let i = 1; i < nums.length; i++) {
        if ((nums[i] - 1) === nums[i - 1]) {
            consecutiveCount++;
        } else {
            consecutiveCount = 1;
        }
        if (consecutiveCount > max) max = consecutiveCount;
    }

    return max;
}

function quickSortWrapper(nums) {
    let low = 0;
    let high = nums.length - 1
    return quickSort(nums, low, high);
}

function quickSort(nums, low, high) {
    if (low >= high) return nums;
    let pivot = getPivot(nums, low, high);
    quickSort(nums, low, pivot - 1);
    quickSort(nums, pivot + 1, high);
    return nums;
}

function getPivot(nums, low, high) {
    let pivot = nums[low];
    let left = low + 1;
    let right = high;

    while (left < right) {
        while (left < high && nums[left] <= pivot) left++;
        while (right > low && nums[right] > pivot) right--;

        if (left < right) swap(nums, left, right);
    }

    swap(nums, right, low);

    return right;
}

function swap(nums, first, second) {
    const temp = nums[first];
    nums[first] = nums[second];
    nums[second] = temp;
}

console.log(longestConsecutiveNumbers([3, 8, 5, 7, 6]));